# AgentSmith Product Site

AgentSmith 的产品白皮书、功能说明与页面证据站点。

## Tech Stack

- Next.js App Router
- MDX
- Fumadocs
- Tailwind CSS v4

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run typecheck
npm run build
```

## References Sync

Before updating content or screenshots:

```bash
./scripts/sync-reference-sources.sh
```

Latest synced screenshot snapshot:

```bash
cat references/product-docs/LATEST_SNAPSHOT.txt
```
