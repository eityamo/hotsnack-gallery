import { NextResponse } from "next/server";
import { getD1Db } from "@/lib/db";
import { hotsnacks } from "@/db/schema";
import { sql } from "drizzle-orm";

export const runtime = "edge";

export async function GET() {
  const db = getD1Db();
  const result = await db
    .select({ item_uuid: hotsnacks.item_uuid })
    .from(hotsnacks)
    .orderBy(sql`RANDOM()`)
    .limit(1);

  if (result.length === 0) {
    return NextResponse.json(null, { status: 404 });
  }

  return NextResponse.json(result[0].item_uuid);
}
