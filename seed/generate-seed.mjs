import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const csv = readFileSync(join(__dirname, "hotsnack.csv"), "utf-8");
const lines = csv.trim().split("\n");
const header = lines[0].split(",");

const now = "2024-01-01T00:00:00.000Z";
const rows = [];

for (let i = 1; i < lines.length; i++) {
  // Parse CSV carefully - fields: id,item_uuid,name,price,description,image,ingredient,genre,store,country
  const line = lines[i];
  // Split by comma but we know the structure: first 4 fields are simple,
  // description can contain commas, image is a URL, then ingredient,genre,store,country
  const parts = line.split(",");

  const id = parts[0];
  const item_uuid = parts[1];

  // Find the image URL (starts with http)
  let imageIdx = -1;
  for (let j = 2; j < parts.length; j++) {
    if (parts[j].startsWith("http")) {
      imageIdx = j;
      break;
    }
  }

  const name = parts[2];
  const price = parts[3];
  const description = parts.slice(4, imageIdx).join(",");
  const image = parts[imageIdx];
  const ingredient = parts[imageIdx + 1];
  const genre = parts[imageIdx + 2];
  const store = parts[imageIdx + 3];
  const country = parts[imageIdx + 4]?.replace(/\r/, "");

  const escapeSql = (s) => s ? s.replace(/'/g, "''").replace(/\\r\\n/g, " ").replace(/\r\n/g, " ").replace(/\r/g, "") : "";

  rows.push(
    `INSERT INTO hotsnacks (id, item_uuid, name, price, description, image, ingredient, like_count, dislike_count, genre, store, country, status, created_at, updated_at) VALUES (${id}, '${escapeSql(item_uuid)}', '${escapeSql(name)}', ${price}, '${escapeSql(description)}', '${escapeSql(image)}', '${escapeSql(ingredient)}', 0, 0, '${escapeSql(genre)}', '${escapeSql(store)}', '${escapeSql(country)}', 1, '${now}', '${now}');`
  );
}

writeFileSync(join(__dirname, "seed.sql"), rows.join("\n") + "\n");
console.log(`Generated ${rows.length} INSERT statements`);
