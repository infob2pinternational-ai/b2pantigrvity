import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const root = new URL('../', import.meta.url);
const config = JSON.parse(readFileSync(new URL('vercel.json', root), 'utf8'));
const base = JSON.parse(execFileSync('git', [
  'show', 'b8e12948331f09af8a265a13d19e0aefefd40dc1:vercel.json',
], { cwd: root, encoding: 'utf8' }));

test('WhatsApp root API is proxied to the existing CRM handler, before fallback routes', () => {
  const routes = config.rewrites.filter(route => route.source === '/api/whatsapp');
  assert.equal(routes.length, 1);
  assert.deepEqual(routes[0], {
    source: '/api/whatsapp',
    destination: 'https://document-gen-ten.vercel.app/api/whatsapp',
  });
  assert.equal(config.rewrites.indexOf(routes[0]), 0);
  // Exact path only: no wildcard API exposure, query substitution, auth override,
  // method override, token or client/provider configuration is introduced.
});

test('billing, documents, reports, redirects and all other configuration are unchanged', () => {
  const rest = structuredClone(config);
  rest.rewrites = rest.rewrites.filter(route => route.source !== '/api/whatsapp');
  assert.deepEqual(rest, base);
});
