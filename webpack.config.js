var webpackConfig = require('hjs-webpack')
var env = process.env.NODE_ENV || 'development'

module.exports = webpackConfig({
  in: 'src/app.js',
  out: 'public',
  isDev: env !== 'production',
  replace: {
    config: 'src/config/' + env + '.js'
  },
  html: function (data) {
    return {
      '200.html': data.defaultTemplate()
    }
  }
})
