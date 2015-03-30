

module.exports = function (opts, required) {
  if (!opts) {
    opts = {}
  }
  for (var i = 0, l = required.length; i < l; i++) {
    if (!opts.hasOwnProperty(required[i])) {
      return false
    }
  }
  return true
}
