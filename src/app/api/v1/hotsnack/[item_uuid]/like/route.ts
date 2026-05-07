import { NextResponse } from "next/server";
import { getD1Db } from "@/lib/db";
import { hotsnacks } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

export const runtime = "edge";

export async function PUT(
  _request: Request,
  { params }: { params: Promise<{ item_uuid: string }> }
) {
  const { item_uuid } = await params;
  const db = getD1Db();

  await db
    .update(hotsnacks)
    .set({ like_count: sql`${hotsnacks.like_count} + 1` })
    .where(eq(hotsnacks.item_uuid, item_uuid));

  const result = await db
    .select()
    .from(hotsnacks)
    .where(eq(hotsnacks.item_uuid, item_uuid))
    .limit(1);

  if (result.length === 0) {
    return NextResponse.json(null, { status: 404 });
  }

  return NextResponse.json(result[0]);
}
