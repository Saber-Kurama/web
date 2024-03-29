import { render as prettyjson } from 'prettyjson';
import path from 'path';
import webpack from 'webpack'

import config from '../../../config';

const modules = {
  React: 'react',
  ReactDOM: 'react-dom',
  ReactDOMServer: 'react-dom/server',
  R: 'ramda',
  classNames: 'classnames',
  themeable: 'react-themeable',
  dude: 'debug-dude',
  Helmet: 'react-helmet'
};

export default [
  new webpack.ProvidePlugin(modules),
  new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /ru|en-gb/),
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin()
]
