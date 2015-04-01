import app from 'ampersand-app'
import qs from 'qs'
import Router from 'ampersand-router'
import React from 'react'
import xhr from 'xhr'
import config from 'config'
import Layout from './layout'
import HomePage from './pages/home'
import RepoDetailPage from './pages/repo-detail'

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
    'login': 'login',
    'logout': 'logout',
    'auth/callback': 'authCallback',
    'repo/:owner/:reponame': 'repoDetail'
  },
  home () {
    this.renderPage(HomePage, {repos: app.me.repos})
  },
  repoDetail (owner, repoName) {
    const repo = app.me.repos.getModelByName(owner + '/' + repoName)
    this.renderPage(RepoDetailPage, {repo: repo, labels: repo.labels})
  },
  login () {
    window.location = config.githubAuthUrl
  },
  logout () {
    app.me.token = ''
    this.redirectTo('/')
  },
  authCallback () {
    const code = qs.parse(window.location.search.slice(1)).code

    xhr({
      url: config.tokenUrl + '/' + code,
      json: true
    }, (err, resp, data) => {
      if (err) {
        console.error('could not get token', err, data)
      } else {
        app.me.token = data.token
      }
      this.redirectTo('/')
    })
  }
})
