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

async function migrate() {
  const apiToken = process.env.DATOCMS_MANAGEMENT_API_TOKEN;
  if (!apiToken)
    throw new Error("Missing DATOCMS_MANAGEMENT_API_TOKEN in .env");

  const client = buildClient({ apiToken });

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

    try {
      // 2. Upload dell'immagine (se esiste nel path specificato)
      let imageId: string | null = null;
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

      console.log("### imageId", imageId);
      // 3. Creazione record su DatoCMS
      // Sostituisci 'news' con lo Static ID del tuo modello
      /*  const record = await client.items.create({
                 item_type: { type: 'item_type', id: 'news' },
                 title: data.title,
                 subtitle: data.subtitle,
                 date: data.date,
                 excerpt: data.subtitle, // Spesso il subtitle va in un campo excerpt
                 source_url: data.link,
                 source_name: data.fonte,
                 featured_image: imageId ? { upload_id: imageId } : null,
                 // Se i tags su Dato sono una lista di stringhe:
                 tags: data.tags,
             }); */

      /* console.log(`   ✅ Successo! ID Record: ${record.id}`); */
    } catch (error: any) {
      console.error(`   ❌ Errore su ${file}:`, error.message);
    }
  }
}

migrate().catch(console.error);
