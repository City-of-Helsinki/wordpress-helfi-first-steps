const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @use '~hds-design-tokens/lib/all' as hds;
          @use '~hds-core/lib/icons/all';
          @use '~hds-core/lib/icons/icon';
          @use '~@/styles/variables' as variables;
          @use '~sass-mq/mq';
        `
      }
    }
  },
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

    config.module
      .rule('yaml')
      .test(/\.ya?ml?$/)
      .use('json-loader')
      .loader('json-loader')
      .end()
      .use('yaml-loader')
      .loader('yaml-loader')
  }
}
