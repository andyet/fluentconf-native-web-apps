var result = require('lodash.result')
var merge = require('lodash.merge')
var pick = require('lodash.pick')
var has = require('lodash.has')
var storage = window.localStorage

module.exports = {
  initStorage: function (opts) {
    if (!storage) {
      return
    }
    // allow options to be passed in when configured
    if (opts) {
      merge(this, pick(opts, ['storageKey', 'ttl']))
    }
    if (!has(this, 'storageKey') || !has(this, 'ttl')) {
      throw Error('Must have `storageKey` and `ttl` options set')
    }
    this.on('change', this.writeToStorage, this)
  },
  writeToStorage: function () {
    storage[result(this, 'storageKey')] = JSON.stringify({
      time: Date.now(),
      data: this.toJSON()
    })
  },
  readFromStorage: function () {
    var key = result(this, 'storageKey')
    try {
      const parsed = JSON.parse(storage[key])
      if (Date.now() - parsed.time > this.storage.ttl) {
        throw new Error('cache expired')
      }
      this.set(parsed.data)
      return true
    } catch (e) {
      // if it fails, delete it
      delete storage[key]
      return false
    }
  }
})
