import app from 'ampersand-app'
import domready from 'domready'
import Router from './router'
import Me from './models/me'
import styles from './styles/main.styl'

window.app = app.extend({
  init () {
    this.me = new Me()
    this.router = new Router()
    this.router.history.start({ pushState: true })
  }
})

domready(() => {
  app.init()
})
