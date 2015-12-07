import path from 'path';
import fs from 'fs';
import { render as prettyjson } from 'prettyjson';
import logger from 'debug-dude';

const { debug, error } = logger('app:server');

const ASSETS_FILE_NAME = 'webpack.assets.json';
const BUNDLE_FILE_NAME = 'main.js';

export default () => {
  if (__DEVELOPMENT__) {
    const timestamp = Date.now();
    const bundle = `${BUNDLE_FILE_NAME}?${timestamp}`;

    debug('assets are managed by webpack dev middleware in dev environment');
    debug(`serving javascript bundle from ${bundle}`);

    return { scripts: [bundle], styles: [] };
  } else {
    const manifestPath = path.resolve(__dirname, ASSETS_FILE_NAME);
    debug('using assets from manifest: ', manifestPath);
    const assetsContent = fs.readFileSync(manifestPath);
    const assets = JSON.parse(assetsContent);
    debug('assets:\n', prettyjson(assets));

    return assets;
  }
};
