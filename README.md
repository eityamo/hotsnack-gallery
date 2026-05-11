# ホットスナック美術館

コンビニのホットスナックを美術品に見立てて鑑賞・評価するWebアプリ。

## 技術スタック

- Next.js 15 (App Router / TypeScript)
- Tailwind CSS v4
- Cloudflare D1 (SQLite) + Drizzle ORM
- Cloudflare Pages (`@opennextjs/cloudflare`)

## セットアップ

```bash
npm install
npm run db:setup:local   # ローカルD1にスキーマ + シードデータ投入
npm run dev              # http://localhost:3000
```

## コマンド一覧

| コマンド | 説明 |
|----------|------|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | Next.js ビルド |
| `npm run db:setup:local` | ローカルDB初期化 (スキーマ + シード) |
| `npm run db:migrate:local` | スキーマのみ適用 |
| `npm run db:seed:local` | シードデータのみ投入 |
| `npm run generate-seed` | CSVからseed.sqlを再生成 |

## API

| エンドポイント | メソッド | 説明 |
|----------------|----------|------|
| `/api/v1/random` | GET | ランダムなホットスナックのUUIDを返す |
| `/api/v1/hotsnacks` | GET | 全件取得 (いいね数降順) |
| `/api/v1/hotsnack/:item_uuid` | GET | 1件取得 |
| `/api/v1/hotsnack/:item_uuid/like` | PUT | いいね+1 |
| `/api/v1/hotsnack/:item_uuid/dislike` | PUT | 微妙+1 |
