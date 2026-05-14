# ホットスナック美術館 — 実装・整備メモ

（作業メモ用。必要なら `.gitignore` に追加してコミット対象から外してください。）

## 完了済み

- ~~**トップ「美術館に入る」**~~ → `/api/v1/random` でUUID取得してから遷移に変更済み
- ~~**`package-lock.json` と CI / Pages**~~ → `npm install` 前提に統一、`package-lock.json` を `.gitignore` に追加済み
- ~~**Google Analytics（`layout.tsx`）**~~ → `NEXT_PUBLIC_GA_MEASUREMENT_ID` 環境変数化済み（`env.example` 参照）
- ~~**共有用 URL**~~ → `NEXT_PUBLIC_SITE_URL` 環境変数 → `window.location.origin` フォールバックに変更済み
- ~~**`wrangler.toml` の `compatibility_date` が古い**~~ → `2025-05-01` に更新済み
- ~~**like/dislike ルートの処理順序**~~ → SELECT → 404チェック → UPDATE の順に修正済み
- ~~**`.mcp.json` パッケージ名**~~ → `@cloudflare/mcp-server-cloudflare` に修正済み
- ~~**like/dislike 連打防止**~~ → クライアント側 2 秒 debounce 追加済み

## 残タスク

- **`npm audit`** の moderate / high の扱い（`npm audit fix` の可否確認）。

- **Cloudflare Rate Limiting**（サーバー側）  
  クライアント側 2 秒 debounce は実装済みだが、API レベルでの連打防止は未対応。
  Cloudflare ダッシュボードの Rate Limiting ルールで `/api/v1/hotsnack/*/like` 等を制限推奨。

- **`open-next.config.ts` の本番向け最適化**  
  現状 `defineCloudflareConfig()` のみ。R2 バケットを用意すれば
  `incrementalCache` を設定して ISR / 画像最適化のパフォーマンスを向上できる。

- **Cloudflare Pages 環境変数の設定**  
  `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-CQ61SHQ7LG` と `NEXT_PUBLIC_SITE_URL=https://www.hotsnack-gallery.com`
  をダッシュボードの Environment Variables に追加する必要がある。
