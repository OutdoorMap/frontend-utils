const { convert } = require(`startijenn-rem`)

module.exports = function (value) {
  value = value
    .split(` `)
    .map((v) => (!v.includes(`px`) ? `${v}px` : v))
    .join(` `)

  return convert(value, `em`, { baseline: 16 })
}
