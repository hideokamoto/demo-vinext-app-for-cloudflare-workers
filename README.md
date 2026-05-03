# next-to-vinext

Next.js 16（App Router）を [vinext](https://www.npmjs.com/package/vinext) で **Cloudflare Workers** 上に載せるサンプルです。Vite と Wrangler を組み合わせ、`wrangler.jsonc` で静的アセットと画像最適化用バインディングを用意したうえで `vinext deploy` まで一通り動かせます。

## 前提

- [pnpm](https://pnpm.io/installation)（このリポジトリは `pnpm@9.15.0` を想定）
- Cloudflare へのデプロイには Wrangler のログインなどが必要です

## セットアップ

```bash
pnpm install
```

## 開発

| コマンド | 説明 |
| --- | --- |
| `pnpm dev` | 通常の Next.js 開発サーバー（既定ポート 3000） |
| `pnpm dev:vinext` | vinext 経由の開発（既定 `--port 3001`） |
| `pnpm preview:worker` | `wrangler dev` で Worker プレビュー |

ブラウザで [http://localhost:3001](http://localhost:3001)（vinext 開発時）または [http://localhost:3000](http://localhost:3000)（`pnpm dev` 時）を開きます。

ページの編集は `app/page.tsx` など App Router 配下から行えます。エントリは `worker/index.ts` で vinext の App Router / RSC ハンドラに接続されています。

## ビルド・本番起動・デプロイ

```bash
pnpm build:vinext    # vinext ビルド（クライアント出力は wrangler の assets と整合）
pnpm start:vinext    # ビルド成果物を vinext で起動
pnpm deploy          # vinext deploy（Cloudflare へ）
```

## Wrangler 設定

`wrangler.jsonc` で Worker の `main`（`./worker/index.ts`）、静的アセット `ASSETS`（`dist/client`）、画像 `IMAGES` バインディングを定義しています。名前や日付を変える場合はこのファイルを編集してください。

## その他のスクリプト

- `pnpm typecheck` — `next typegen` と `tsc --noEmit`
- `pnpm test` — Vitest
- `pnpm lint` — ESLint
- `pnpm cf:types` — `wrangler types`

## 補足

このリポジトリで使っている Next.js は、一般に知られている版と API・慣例・ディレクトリ構成が異なる場合があります。コードを書く前に `AGENTS.md` と `node_modules/next/dist/docs/` の該当ガイドを参照してください。
