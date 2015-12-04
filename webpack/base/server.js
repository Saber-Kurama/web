import merge from 'webpack-merge';

import config from '../../config';
import isExternal from '../utils/isExternal';
import common from './common';
import loaders from './loaders/server';
import plugins from './plugins/server';

export default merge(common, {
  target: 'node',
  bail: true,

  externals: [
    (ctx, req, cb) => cb(null, isExternal(ctx, req))
  ],

  entry: ['./server/index.js'],
  module: { loaders },
  plugins,
  output: {
    path: config.paths.dist,
    filename: 'server.js',
    library: 'ServerApp',
    libraryTarget: 'commonjs2'
  },

  // disable node mocks & polyfills
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  }
});
