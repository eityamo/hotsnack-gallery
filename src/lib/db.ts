import { getCloudflareContext } from "@opennextjs/cloudflare";
import { getDb } from "@/db";

export async function getD1Db() {
  const { env } = await getCloudflareContext();
  return getDb(env.DB as D1Database);
}
