const path = require('path')

module.exports = {
  pages: {
    demo: {
      entry: 'src/demo/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack (config) {
    // Add aliases
    config.resolve.alias
      .set('@demo', path.resolve('src/demo'))
  }
}
