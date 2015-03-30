import State from 'ampersand-state'

export default State.extend({
  initialize () {
    this.fetchIfOld()
    this.on('change', this.store, this)
  },
  props: {
    token: 'string'
  },
  derived: {
    loggedIn: {
      deps: ['token'],
      fn () {
        return !!this.token
      }
    }
  },
  storage: {
    key: 'me',
    ttl: 60000
  },
  store () {
    window.localStorage[this.storage.key] = JSON.stringify({
      time: Date.now(),
      data: this.toJSON()
    })
  },
  restore () {
    try {
      const parsed = JSON.parse(window.localStorage[this.storage.key])
      if (Date.now() - parsed.time > this.storage.ttl) {
        throw new Error('cache expired')
      }
      this.set(parsed.data)
      return true
    } catch (e) {
      delete localStorage[this.storage.key]
      return false
    }
  },
  fetchIfOld () {
    if (!this.restore()) {
      console.log('would fetch')
    }
  }
})
