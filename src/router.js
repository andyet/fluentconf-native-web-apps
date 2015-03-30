import app from 'ampersand-app'
import qs from 'qs'
import Router from 'ampersand-router'
import React from 'react'
import xhr from 'xhr'
import Layout from './layout'
import HomePage from './pages/home'
import ReposPage from './pages/repos'

export default Router.extend({
  renderPage (Page, opts = {}) {
    const main = (
      <Layout me={app.me}>
        <Page me={app.me} {...opts}/>
      </Layout>
    )

    React.render(main, document.body)
  },
  routes: {
    '': 'home',
    'repos': 'repos',
    'login': 'login',
    'logout': 'logout',
    'auth/callback': 'authCallback'
  },
  home () {
    this.renderPage(HomePage)
  },
  repos () {
    this.renderPage(ReposPage)
  },
  login () {
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      redirect_uri: window.location.origin + '/auth/callback',
      scope: 'user,repo,gist',
      client_id: '34d32bcd940626d0d6f3'
    })
  },
  logout () {
    app.me.token = ''
    this.redirectTo('/')
  },
  authCallback () {
    const code = qs.parse(location.search.slice(1)).code

    xhr({
      url: 'https://hjs-training.herokuapp.com/authenticate/' + code,
      json: true
    }, (err, resp, data) => {
      app.me.token = data.token
      this.redirectTo('/')
    })
  }
})
