import { NextResponse } from "next/server";
import { getD1Db } from "@/lib/db";
import { hotsnacks } from "@/db/schema";
import { desc } from "drizzle-orm";

export const runtime = "edge";

export async function GET() {
  const db = getD1Db();
  const result = await db
    .select()
    .from(hotsnacks)
    .orderBy(desc(hotsnacks.like_count));

  return NextResponse.json(result);
}
