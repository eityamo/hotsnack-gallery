import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const hotsnacks = sqliteTable("hotsnacks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  item_uuid: text("item_uuid").notNull().unique(),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  ingredient: text("ingredient"),
  like_count: integer("like_count").notNull().default(0),
  dislike_count: integer("dislike_count").notNull().default(0),
  genre: text("genre"),
  store: text("store").notNull(),
  country: text("country").notNull(),
  status: integer("status", { mode: "boolean" }).notNull().default(true),
  created_at: text("created_at").notNull(),
  updated_at: text("updated_at").notNull(),
});

export const areas = sqliteTable("areas", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  created_at: text("created_at").notNull(),
  updated_at: text("updated_at").notNull(),
});

export const hotsnack_areas = sqliteTable("hotsnack_areas", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  hotsnack_id: integer("hotsnack_id")
    .notNull()
    .references(() => hotsnacks.id),
  area_id: integer("area_id")
    .notNull()
    .references(() => areas.id),
  created_at: text("created_at").notNull(),
  updated_at: text("updated_at").notNull(),
});

export type Hotsnack = typeof hotsnacks.$inferSelect;
