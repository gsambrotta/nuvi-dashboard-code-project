'use strict';

const webpackServer = require('./webpack-server');

const PORT = process.env.PORT || 3001;

/*
const expressServer = require('./express-server');
const PROD = process.env.NODE_ENV === 'production';
if (PROD) {
  expressServer(PORT);
} else {
  expressServer(PORT - 1);
  webpackServer(PORT);
}
*/

webpackServer(PORT);
