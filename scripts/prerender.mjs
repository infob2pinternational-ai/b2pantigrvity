import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

const dist = resolve('dist');
const temp = await mkdtemp(resolve('node_modules/.site-render-'));

try {
  await build({
    build: {
      ssr: 'scripts/render-site.jsx',
      outDir: temp,
      copyPublicDir: false,
    },
  });

  const { renderPage } = await import(pathToFileURL(join(temp, 'render-site.js')));
  const [template, sitemap] = await Promise.all([
    readFile(join(dist, 'index.html'), 'utf8'),
    readFile(join(dist, 'sitemap.xml'), 'utf8'),
  ]);
  if (!template.includes('<!-- page-head -->') || !template.includes('<div id="root"></div>')) {
    throw new Error('Run the client build before prerendering.');
  }
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map(([, url]) => new URL(url));
  urls.push(new URL('/404', urls[0]));

  for (const { pathname, href } of urls) {
    const html = await renderPage(pathname);
    const rootIndex = html.indexOf('<div id="root"');
    if (rootIndex < 0) throw new Error(`Missing app markup for ${pathname}`);
    const head = html.slice(0, rootIndex);
    const body = html.slice(rootIndex);
    const main = body.match(/<main[ >][\s\S]*?<\/main>/)?.[0] ?? '';
    if ((main.match(/<h1[ >]/g) ?? []).length !== 1 || !head.includes(`rel="canonical" href="${href}"`)) {
      throw new Error(`Expected one H1 and a canonical link for ${pathname}`);
    }

    const page = template
      .replace('<!-- page-head -->', () => head.replace(/<(title|meta|link)(?=[\s>])/g, '<$1 data-prerendered-head=""'))
      .replace('<div id="root"></div>', () => body);
    const file = join(dist, pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, page);
  }

  console.log(`Prerendered ${urls.length} pages.`);
} finally {
  await rm(temp, { recursive: true, force: true });
}
