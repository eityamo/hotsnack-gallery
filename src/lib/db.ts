import { getRequestContext } from "@cloudflare/next-on-pages";
import { getDb } from "@/db";

export function getD1Db() {
  const { env } = getRequestContext<CloudflareEnv>();
  return getDb(env.DB);
}
