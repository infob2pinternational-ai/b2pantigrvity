import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const config = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
const crm = 'https://document-gen-ten.vercel.app';

test('CRM routes preserve their exact existing proxy destinations', () => {
  const paths = [
    '/api/email',
    '/api/followup-review',
    '/api/whatsapp',
    '/api/detailed-staff-report',
    '/billing',
    '/billing/:path*',
    '/doc/:path*',
  ];
  assert.deepEqual(config.rewrites, paths.map((source) => ({ source, destination: crm + source })));
});

test('public HTML is served with clean URLs and the host redirect excludes CRM routes', () => {
  assert.equal(config.cleanUrls, true);
  const [homepageRedirect, hostRedirect] = config.redirects;
  assert.deepEqual(homepageRedirect, {
    source: '/',
    has: hostRedirect.has,
    destination: 'https://www.b2pinternational.com/',
    permanent: true,
  });
  assert.deepEqual(hostRedirect.has, [{ type: 'host', value: 'b2pinternational.com' }]);
  assert.equal(hostRedirect.destination, 'https://www.b2pinternational.com/:path');
  assert.equal(hostRedirect.permanent, true);
  const publicPath = new RegExp(`^/${hostRedirect.source.slice('/:path('.length, -1)}$`);
  for (const path of ['/led-van-advertising', '/locations/kochi', '/robots.txt']) {
    assert.match(path, publicPath);
  }
  for (const path of ['/api/whatsapp', '/billing', '/billing/invoice', '/doc/example']) {
    assert.doesNotMatch(path, publicPath);
  }
});
