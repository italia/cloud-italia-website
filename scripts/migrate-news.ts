import { buildClient } from "@datocms/cma-client-node";
import * as dotenv from "dotenv";
import * as fs from "fs";
import matter from "gray-matter";
import * as path from "path";
dotenv.config();

// 1. Definiamo la struttura del tuo Frontmatter
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
async function getOrCreateTopic(client: any, label: string) {
  const normalizedLabel = label.trim();

  if (topicCache.has(normalizedLabel)) {
    return topicCache.get(normalizedLabel);
  }

  const existingTopics = await client.items.list({
    filter: {
      type: "topic", // <--- Sostituisci con lo Static ID del modello Topic
      fields: {
        label: { eq: normalizedLabel }, // Assumendo che il campo si chiami 'label'
      },
    },
  });

  if (existingTopics.length > 0) {
    topicCache.set(normalizedLabel, existingTopics[0].id);
    return existingTopics[0].id;
  }

  console.log(`      ✨ Creazione nuovo Topic: ${normalizedLabel}`);
  const newTopic = await client.items.create({
    item_type: { type: "item_type", id: "ZmTkDRybSzmAn5nLCkSZHg" },
    label: {
      it: normalizedLabel,
    },
  });

  topicCache.set(normalizedLabel, newTopic.id);
  return newTopic.id;
}

async function migrate() {
  const apiToken = process.env.DATOCMS_MANAGEMENT_API_TOKEN;
  const environment = process.env.DATOCMS_ENVIRONMENT;
  if (!apiToken || !environment)
    throw new Error(
      "Missing DATOCMS_MANAGEMENT_API_TOKEN or DATOCMS_ENVIRONMENT in .env",
    );

  const client = buildClient({ apiToken, environment });

  // Percorsi (modificali in base alla tua struttura)
  const newsDirectory = path.resolve(process.cwd(), "notizie");
  const publicFolder = path.resolve(process.cwd(), ".");

  const files = fs.readdirSync(newsDirectory);

  for (const file of files) {
    if (!file.endsWith(".md")) continue;

    const filePath = path.join(newsDirectory, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Parsing con gray-matter castato alla nostra interfaccia
    const { data } = matter(fileContent) as unknown as {
      data: NewsFrontmatter;
      content: string;
    };

    console.log(`🚀 Elaborazione: ${data.title}`);

    let imageId: string | null = null;
    const fullImagePath = path.join(newsDirectory, "img.jpeg");
    console.log(fs.statSync(fullImagePath).size);
    console.log("### image", fullImagePath);

    if (fs.existsSync(fullImagePath)) {
      try {
        const image = await client.uploads.createFromLocalFile({
          localPath: fullImagePath,
          skipCreationIfAlreadyExists: true,
        });

        imageId = image.id;
        console.log(`   ✅ Immagine caricata con ID: ${imageId}`);
      } catch (error: any) {
        console.error(
          `   ❌ Errore caricamento ${fullImagePath}:`,
          error.message,
        );
      }
    }

    console.log("### imageId", imageId);

    try {
      let topicId: string | null = null;
      if (data.tags && data.tags.length > 0) {
        topicId = await getOrCreateTopic(client, data.tags[0]);
      }

      /*  let imageId: string | null = null;
       const fullImagePath = path.join(publicFolder, data.image);
       console.log(fs.statSync(fullImagePath).size);
       console.log("### image", fullImagePath);
 
       if (fs.existsSync(fullImagePath)) {
         try {
           const image = await client.uploads.createFromLocalFile({
             localPath: fullImagePath,
             skipCreationIfAlreadyExists: true,
           });
 
           imageId = image.id;
           console.log(`   ✅ Immagine caricata con ID: ${imageId}`);
         } catch (error: any) {
           console.error(
             `   ❌ Errore caricamento ${fullImagePath}:`,
             error.message,
           );
         }
       }
 
       console.log("### imageId", imageId); */
      /* Se non ci sta il link esterno skippare */
      const record = await client.items.create({
        item_type: { type: "item_type", id: "I7swbqFhSdekgCtytCwk9w" },
        title: {
          it: data.title,
        },
        paragraph: {
          it: data.subtitle,
        },
        link: {
          it: data.link || "",
        },
        date_of_publication: { it: data.date },
        image: imageId
          ? {
              upload_id: imageId,
            }
          : null,
        topic: topicId ? { it: topicId } : null,
      });

      console.log(`   ✅ Successo! ID Record: ${record.id}`);
    } catch (error: any) {
      console.error(`   ❌ Errore su ${file}:`, error.message);
    }
  }
}

migrate().catch(console.error);
