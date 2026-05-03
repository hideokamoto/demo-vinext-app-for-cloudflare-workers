export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-16 py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            vinext sample
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
            Next.js App Router<br />on Cloudflare Workers
          </h1>
          <p className="max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <strong className="text-zinc-900 dark:text-zinc-100">vinext</strong> は Next.js App Router を Cloudflare Workers 上で動かすアダプターです。
            RSC・Server Actions・Image Optimization を Workers ネイティブで処理します。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Feature
            label="App Router (RSC)"
            description="React Server Components がそのまま動作します。このページ自体がサーバーコンポーネントです。"
          />
          <Feature
            label="Image Optimization"
            description="Cloudflare Images バインディング経由で next/image の変換を Workers 上で実行します。"
          />
          <Feature
            label="Cloudflare Workers"
            description="wrangler.jsonc で ASSETS / IMAGES バインディングを設定するだけで deploy 可能です。"
          />
          <Feature
            label="標準の Next.js 設定"
            description="next.config.ts はそのまま使えます。ビルドは next build → dist を Workers が配信します。"
          />
        </div>

        <div className="flex flex-col gap-3 font-mono text-sm bg-zinc-50 dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800">
          <p className="text-zinc-400 dark:text-zinc-500"># 最小構成</p>
          <p className="text-zinc-800 dark:text-zinc-200">
            <span className="text-zinc-400">1.</span> pnpm build
          </p>
          <p className="text-zinc-800 dark:text-zinc-200">
            <span className="text-zinc-400">2.</span> wrangler deploy
          </p>
        </div>
      </main>
    </div>
  );
}

function Feature({ label, description }: { label: string; description: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 flex flex-col gap-2">
      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{label}</p>
      <p className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">{description}</p>
    </div>
  );
}
