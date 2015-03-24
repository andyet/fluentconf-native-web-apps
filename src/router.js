import app from 'ampersand-app'
import Router from 'ampersand-router'
import React from 'react'
import Layout from './layout'
import HomePage from './pages/home'
import HowlsPage from './pages/howls'

export default Router.extend({
  renderPage (Page, opts = {}) {
    var main = (
      <Layout app={app}>
        <Page app={app} {...opts}/>
      </Layout>
    )

    React.render(main, document.body)
  },
  routes: {
    '': 'home',
    'howls': 'howls'
  },
  home () {
    this.renderPage(HomePage)
  },
  howls () {
    this.renderPage(HowlsPage)
  }
})
