// CSS's `color-mix` allows to set the opacity for hex color values, e.g.:
// color: color-opacity(var(--color-black), 0.5)

module.exports = function (color, opacity) {
  opacity = (1 - parseFloat(opacity)) * 100

  return `color-mix(in srgb, ${color}, transparent ${opacity}%)`
}
