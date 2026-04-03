import { buildClient } from "@datocms/cma-client-node";
import * as crypto from "crypto";
import * as dotenv from "dotenv";
import * as fs from "fs";
import matter from "gray-matter";
import * as path from "path";

dotenv.config();

const ASSETS_BASE_PATH = path.resolve(process.cwd(), "notizie");
interface NewsFrontmatter {
  type: string;
  title: string;
  subtitle: string;
  date: string;
  evidence: boolean;
  internalNews: boolean;
  fonte: string;
  showInHome: boolean;
  typeOfNews: string;
  link: string;
  image: string;
  tags: string[];
}

const topicCache = new Map<string, string>();
const imageCache = new Map<string, string>();

async function getOrCreateTopic(client: any, label: string) {
  const normalizedLabel = label.trim();

  if (topicCache.has(normalizedLabel)) {
    return topicCache.get(normalizedLabel);
  }

  const existingTopics = await client.items.list({
    filter: {
      type: "news_topic",
      fields: {
        label: { eq: normalizedLabel },
      },
    },
  });

  if (existingTopics.length > 0) {
    topicCache.set(normalizedLabel, existingTopics[0].id);
    return existingTopics[0].id;
  }

  console.log(`      ✨ Creation of new Topic: ${normalizedLabel}`);
  const newTopic = await client.items.create({
    item_type: { type: "item_type", id: "ZmTkDRybSzmAn5nLCkSZHg" },
    label: {
      it: normalizedLabel,
    },
  });

  topicCache.set(normalizedLabel, newTopic.id);
  return newTopic.id;
}

async function getOrCreateImage(
  client: any,
  localPath: string,
): Promise<string | null> {
  if (!fs.existsSync(localPath)) {
    console.warn(`   ⚠️ Image not found: ${localPath}`);
    return null;
  }

  const fileBuffer = fs.readFileSync(localPath);
  const fileName = path.basename(localPath);

  const checksum = crypto.createHash("md5").update(fileBuffer).digest("hex");

  if (imageCache.has(checksum)) return imageCache.get(checksum)!;

  const existing = await client.uploads.list({
    filter: { fields: { md5: { eq: checksum } } },
  });

  if (existing.length > 0) {
    const id = existing[0].id;
    imageCache.set(checksum, id);
    return id;
  }

  console.log(`   ⬆️  Uploading new asset: ${fileName}...`);
  const uploadRequest = await client.uploadRequest.create({
    filename: fileName,
  });

  await fetch(uploadRequest.url, {
    method: "PUT",
    headers: {
      ...uploadRequest.request_headers,
      "Content-Length": fileBuffer.length.toString(),
    },
    body: fileBuffer,
  });

  const upload = await client.uploads.create({ path: uploadRequest.id });
  imageCache.set(checksum, upload.id);

  return upload.id;
}

async function migrate() {
  const apiToken = process.env.DATOCMS_MANAGEMENT_API_TOKEN;
  const environment = process.env.DATOCMS_ENVIRONMENT;
  if (!apiToken || !environment)
    throw new Error(
      "Missing DATOCMS_MANAGEMENT_API_TOKEN or DATOCMS_ENVIRONMENT in .env",
    );

  const client = buildClient({ apiToken, environment });

  const files = fs.readdirSync(ASSETS_BASE_PATH);

  for (const file of files) {
    if (!file.endsWith(".md")) continue;

    const filePath = path.join(ASSETS_BASE_PATH, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(fileContent) as unknown as {
      data: NewsFrontmatter;
      content: string;
    };

    console.log(`🚀 Processing: ${data.title}`);

    if (!data.title || !data.link || !data.image) {
      console.log(
        `⏭️  Skip ${file}: Missing required fields (title, link, or image)`,
      );
      continue;
    }

    try {
      const fullImagePath = path.join(ASSETS_BASE_PATH, data.image);
      const imageId = await getOrCreateImage(client, fullImagePath);
      if (!imageId) continue;

      let topicId: string | null = null;
      if (data.tags && data.tags.length > 0) {
        topicId = await getOrCreateTopic(client, data.tags[0]);
      }

      const record = await client.items.create({
        item_type: { type: "item_type", id: "I7swbqFhSdekgCtytCwk9w" },
        title: {
          it: data.title,
        },
        paragraph: {
          it: data.subtitle,
        },
        link: {
          it: data.link,
        },
        date_of_publication: { it: data.date },
        image: imageId
          ? {
              upload_id: imageId,
            }
          : null,
        topic: topicId ? { it: topicId } : null,
      });

      console.log(`   ✅ Done! ID Record: ${record.id}`);
    } catch (error: any) {
      console.error(`   ❌ Error ${file}:`, error.message);
    }
  }
}

migrate().catch(console.error);
