import { NextResponse } from "next/server";
import { getD1Db } from "@/lib/db";
import { hotsnacks } from "@/db/schema";
import { eq, sql } from "drizzle-orm";


export async function PUT(
  _request: Request,
  { params }: { params: Promise<{ item_uuid: string }> }
) {
  const { item_uuid } = await params;
  const db = await getD1Db();

  const existing = await db
    .select()
    .from(hotsnacks)
    .where(eq(hotsnacks.item_uuid, item_uuid))
    .limit(1);

  if (existing.length === 0) {
    return NextResponse.json(null, { status: 404 });
  }

  await db
    .update(hotsnacks)
    .set({ like_count: sql`${hotsnacks.like_count} + 1` })
    .where(eq(hotsnacks.item_uuid, item_uuid));

  return NextResponse.json({ ...existing[0], like_count: existing[0].like_count + 1 });
}
