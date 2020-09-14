const path = require("path")
const fs = require("fs")

exports.onPreInit = () => {
  if (process.argv[2] === "build") {
    fs.rmdirSync(path.join(__dirname, "docs"), { recursive: true })
  }
}

exports.onPostBuild = () => {
  fs.renameSync(path.join(__dirname, "public"), path.join(__dirname, "docs"));
  // copy the cname to the docs folder
  fs.copyFileSync(path.join(__dirname, "CNAME"), path.join(__dirname, "docs", "CNAME"));
}