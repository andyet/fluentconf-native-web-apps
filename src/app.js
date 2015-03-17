import app from 'ampersand-app'
import domready from 'domready'
import Router from './router'


window.app = app.extend({
  init() {
    this.router = new Router()
    this.router.history.start({ pushState: true })
  }
})

domready(() => {
  app.init()
})
