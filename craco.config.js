const path = require("path")
const CracoLessPlugin = require("craco-less");
const pathResolve = pathName => path.resolve(__dirname,pathName)
module.exports = {
  // webpack
  webpack:{
    alias:{
      "@":pathResolve("src"),
      "components":pathResolve("components") ,
      "utils":pathResolve("utils") 
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin
    },
  ]
}