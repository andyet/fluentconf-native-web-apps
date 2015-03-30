import Model from 'ampersand-model'
import ms from 'milliseconds'
import cacheMixin from 'ampersand-local-cache-mixin'

export default Model.extend(cacheMixin, {
  url: 'https://api.github.com/user',
  initialize () {
    this.initStorage({
      storageKey: 'me',
      ttl: ms.days(30),
      tts: ms.minutes(10)
    })
    this.on('stale', this.fetch)
    this.on('change', this.writeToStorage, this)
    this.on('change:login', this.onLoginChange, this)
  },
  props: {
    token: 'string',
    login: 'string',
    'avatar_url': 'string'
  },
  derived: {
    loggedIn: {
      deps: ['token'],
      fn () {
        return !!this.token
      }
    }
  },
  onLoginChange () {
    if (this.loggedIn) {
      this.fetch()
    } else {
      // wipe local data
      localStorage.clear()
    }
  },
  ajaxConfig () {
    return {
      headers: {
        'Authorization': 'token ' + app.me.token
      }
    }
  }
})
