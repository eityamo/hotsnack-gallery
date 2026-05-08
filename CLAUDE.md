# CLAUDE.md

## プロジェクト概要

ホットスナック美術館 — コンビニのホットスナックを美術品に見立てて鑑賞・評価するWebアプリ。

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router, `src/` ディレクトリ)
- **言語**: TypeScript
- **CSS**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **DB**: Cloudflare D1 (SQLite)
- **ORM**: Drizzle ORM
- **デプロイ**: Cloudflare Pages (`@opennextjs/cloudflare`)

## コマンド

```bash
npm run dev              # ローカル開発サーバー起動
npm run build            # Next.js ビルド
npm run db:setup:local   # ローカルD1にスキーマ作成 + シードデータ投入
npm run db:migrate:local # スキーマのみ適用
npm run db:seed:local    # シードデータのみ投入
npm run generate-seed    # CSVからseed.sqlを再生成
```

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx              # ルートレイアウト (ヘッダー + BottomNavigation)
│   ├── page.tsx                # トップページ (Client Component)
│   ├── globals.css             # カスタムCSS (額縁, メダル等)
│   ├── hotsnack/[item_uuid]/   # 商品詳細ページ (Client Component)
│   ├── categories/             # ランキングページ (Client Component)
│   └── api/v1/                 # API Routes
│       ├── random/             # GET: ランダムなitem_uuid返却
│       ├── hotsnacks/          # GET: 全件取得 (like_count DESC)
│       └── hotsnack/[item_uuid]/
│           ├── route.ts        # GET: 1件取得
│           ├── like/route.ts   # PUT: いいね+1
│           └── dislike/route.ts # PUT: 微妙+1
├── components/                 # UIコンポーネント (9個)
├── db/
│   ├── schema.ts               # Drizzle ORMスキーマ定義
│   └── index.ts                # DB接続ヘルパー
└── lib/
    └── db.ts                   # D1接続 (getCloudflareContext経由)

seed/
├── hotsnack.csv                # マスターデータ (118件)
├── schema.sql                  # D1用DDL
├── seed.sql                    # INSERTデータ
└── generate-seed.mjs           # CSV → seed.sql 変換スクリプト
```

## DB スキーマ

メインテーブルは `hotsnacks` (14カラム):
- `item_uuid`: 一意識別子 (URLで使用)
- `price`: 価格 (円)
- `like_count` / `dislike_count`: 評価カウント
- `genre`: ジャンル (フランク, チキン, コロッケ等)
- `store`: 店舗 (セブンイレブン, ファミリーマート等)

## 開発時の注意

- ローカルD1は `initOpenNextCloudflareForDev()` で自動バインドされる (`next.config.ts`)
- API Routes で D1 にアクセスする際は `const db = await getD1Db()` を使用
- ページは全て Client Component (`"use client"`)
- モバイルファースト設計: max-width 375px
- 背景色: `#f6f5ee`
- フォント: Lusitana (Google Fonts)
