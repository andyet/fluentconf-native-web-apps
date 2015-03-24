var getConfig = require('hjs-webpack')
var env = process.env.NODE_ENV || 'development'


module.exports = getConfig({
  isDev: env === 'development',
  in: 'src/app.js',
  out: 'public',
  html: function (data) {
    var output = '<!doctype><script src="/' + data.main + '"></script>';
    return {
      '200.html': output
    }
  }
})
