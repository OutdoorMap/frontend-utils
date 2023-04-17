module.exports = {
  plugins: [
    require(`postcss-import`),
    require(`postcss-flexbugs-fixes`),
    require(`postcss-preset-env`)({
      autoprefixer: {
        flexbox: `no-2009`,
        grid: true,
      },
      stage: 3,
    }),
    require(`postcss-inline-svg`)({
      removeFill: true,
      removeStroke: true,
    }),
    require(`postcss-svgo`),
  ],
}
