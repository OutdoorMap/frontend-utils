const path = require(`path`)

const fnEmify = require(`./fn.emify.js`)
const fnRemify = require(`./fn.remify.js`)
const fnColorOpacity = require(`./fn.color-opacity.js`)

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-mixins": {
      mixinsFiles: path.resolve(__dirname, `./mixin.*.css`),
    },
    "postcss-simple-vars": {
      silent: true,
    },
    "postcss-functions": {
      functions: {
        emify: fnEmify,
        remify: fnRemify,
        "color-opacity": fnColorOpacity,
      },
    },
    "@csstools/postcss-global-data": {
      files: [path.resolve(__dirname, `./custom-media.css`)],
    },
    "postcss-custom-media": {},
    "postcss-nesting": { noIsPseudoSelector: true }, // must have to work with `postcss-mixins`: https://github.com/postcss/postcss-mixins/issues/171 (related: https://github.com/vercel/next.js/issues/67193)
    "postcss-hexrgba": {},
    "postcss-custom-selectors": {},
    "@csstools/postcss-media-minmax": {},
    "@csstools/postcss-text-decoration-shorthand": {},
    // "autoprefixer": {
    //   env: process.env.NODE_ENV,
    //   flexbox: false,
    //   grid: false,
    // },
    // "postcss-preset-env": {
    //   autoprefixer: { grid: false },
    //   stage: 2,
    //   features: {
    //     // https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/FEATURES.md
    //     clamp: false,
    //     "logical-properties-and-values": false,
    //     "media-query-ranges": {
    //       preserve: true,
    //     },
    //     "custom-properties": false,
    //     // "is-pseudo-class": false,
    //     // "nesting-rules": false, // doesn't work with `postcss-mixins`: https://github.com/postcss/postcss-mixins/issues/171 (related: https://github.com/vercel/next.js/issues/67193)
    //   },
    // },
  },
}
