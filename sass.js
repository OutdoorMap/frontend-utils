const fs = require("fs")
const sass = require("sass")

const result = sass.compile("src/scss/reset.scss")
fs.writeFileSync("dist/reset.css", result.css)
