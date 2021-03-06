'use strict';

module.exports = {
  client: {
    source: ['client/**/*.{html,css,ico}', '!**/app/**'],
    destination: '../public',
    app: ['client/**/*.js']
  },
  general: {
    source: ['package.json', 'Procfile'],
    destination: 'dist'
  },
  liveReload: {
    port: 35729
  },
  build: {
    destination: 'dist'
  }
};
