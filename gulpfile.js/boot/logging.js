'use strict';

const debug = require('debug');
const R = require('ramda');
const app = require('../../config');

const levels = {
  test: ['log', 'info', 'warn', 'error'],
  development: ['log', 'info', 'warn', 'error'],
  staging: ['info', 'warn', 'error'],
  production: ['warn', 'error']
};

if (app.argv.debug) {
  levels[app.environment].push('debug');
}

const loggers = [
  'app:bundle',
  'app:webpack',
  'app:server'
];

R.xprod(loggers, levels[app.environment])
  .map(([logger, level]) => `${logger}:${level}`)
  .forEach(debug.enable);
