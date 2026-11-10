import React from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import App from '../src/App.jsx';
import { pageLoaders } from '../src/pageLoaders.js';

const pagesPromise = Promise.all(Object.entries(pageLoaders).map(async ([name, load]) => {
  const { default: Page } = await load();
  return [name, Page];
})).then(Object.fromEntries);

export async function renderPage(pathname) {
  const pages = await pagesPromise;
  const { prelude } = await prerenderToNodeStream(
    <div id="root" data-prerendered-path={pathname}>
      <App pages={pages} router={StaticRouter} routerProps={{ location: pathname }} />
    </div>,
    { progressiveChunkSize: Infinity, onError(error) { throw error; } },
  );

  prelude.setEncoding('utf8');
  let html = '';
  for await (const chunk of prelude) html += chunk;
  return html;
}
