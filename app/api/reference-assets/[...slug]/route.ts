import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import { basename, extname, join, normalize, resolve } from 'node:path';
import { Readable } from 'node:stream';

const latestRoot = resolve(process.cwd(), 'references/product-docs/latest');

const contentTypeMap: Record<string, string> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

export async function GET(_: Request, context: RouteContext<'/api/reference-assets/[...slug]'>) {
  const params = await context.params;
  const slug = params.slug ?? [];
  const requestedPath = normalize(join(latestRoot, ...slug));

  if (!requestedPath.startsWith(latestRoot) || !existsSync(requestedPath)) {
    return new Response('Not found', { status: 404 });
  }

  const fileStat = await stat(requestedPath);
  if (!fileStat.isFile()) {
    return new Response('Not found', { status: 404 });
  }

  const stream = Readable.toWeb(createReadStream(requestedPath)) as ReadableStream;
  const contentType = contentTypeMap[extname(requestedPath).toLowerCase()] ?? 'application/octet-stream';

  return new Response(stream as unknown as ReadableStream, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=3600',
      'Content-Disposition': `inline; filename="${basename(requestedPath)}"`,
    },
  });
}
