import paths from '../../../config/paths';
import common from './common';
import { cssOptions } from '../../utils';

// for more info about css loading see:
// https://github.com/webpack/css-loader#local-scope

export default [
  ...common,
  {
    test: /\.css$/,
    include: [paths.modules, paths.styles, paths.scripts],
    loaders: [`css/locals?${cssOptions.css}`, 'postcss']
  },
  {
    test: /\.scss$/,
    exclude: /node_modules\/react-toolbox\/lib/,
    loaders: [`css/locals?${cssOptions.sass}`, `sass?includePath[]=${paths.modules}`],
  },
  {
    test: /\.scss$/,
    include: /node_modules\/react-toolbox\/lib/,
    loaders: [`css/locals?${cssOptions.sass}`, `sass?includePath[]=${paths.modules}`, 'toolbox'],
  }
]
