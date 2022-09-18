const path = require('path')
const CracoLessPlugin = require('craco-less')
const WebpackBar = require('webpackbar')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // "@primary-color": "#1DA57A",
              // "@link-color": "#1DA57A",
              // "@border-radius-base": "2px",
            },
            javascriptEnabled: true,
          },
        },
      }
    }
  ],
  webpack: {
    plugins: [
      new WebpackBar()
    ],
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  devServer: {
    port: 8080,
    open: false
  }
}
