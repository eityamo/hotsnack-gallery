CREATE TABLE IF NOT EXISTS hotsnacks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  item_uuid TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  ingredient TEXT,
  like_count INTEGER NOT NULL DEFAULT 0,
  dislike_count INTEGER NOT NULL DEFAULT 0,
  genre TEXT,
  store TEXT NOT NULL,
  country TEXT NOT NULL,
  status INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS areas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS hotsnack_areas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  hotsnack_id INTEGER NOT NULL REFERENCES hotsnacks(id),
  area_id INTEGER NOT NULL REFERENCES areas(id),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_hotsnacks_item_uuid ON hotsnacks(item_uuid);
CREATE INDEX IF NOT EXISTS idx_hotsnack_areas_hotsnack_id ON hotsnack_areas(hotsnack_id);
CREATE INDEX IF NOT EXISTS idx_hotsnack_areas_area_id ON hotsnack_areas(area_id);
