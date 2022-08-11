const env = require('./config/env.js');
const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const modules = require('./config/modules.js');
const buildModules = require('./config/buildModules.js');
const css = require('./config/css.js');
const router = require('./config/router.js');
const pwa = require('./config/pwa.js');
const manifest = require('./config/manifest.js');
const build = require('./config/build.js');

module.exports = {
  watch: ['~/config/*'],
  env,
  head,
  loading: { color: '#3B8070' },
  plugins,
  modules,
  buildModules,
  router,
  css,
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  manifest,
  build,
  pwa,
  server: {
    host: '0.0.0.0', // default: localhost,
    timing: false,
    port: 80,
  },

  svgSprite: {
    input: '~/assets/icons/',
  },

  image: {
    domains: ['nuxtjs.org'],
    dir: 'assets/images',
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 40,
          height: 40,
        },
      },
    },
  },
};
