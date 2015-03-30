import React from 'react'
import app from 'ampersand-app'
import localLinks from 'local-links'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],
  displayName: 'Layout',
  onClick (event) {
    var pathname = localLinks.getLocalPathname(event)
    if (pathname) {
      event.preventDefault()
      app.router.history.navigate(pathname, { trigger: true })
    }
  },
  render () {
    const {me} = this.props
    if (me.loggedIn) {
      return (
        <div onClick={this.onClick}>
          <nav className='top-nav top-nav-light cf' role='navigation'>
            <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
            <label for='menu-toggle'>Menu</label>
            <ul className='list-unstyled list-inline cf'>
              <li>LABELR</li>
              <li><a href="/">Home</a></li>
              <li><a href="/repos">Repos</a></li>
              <li className="pull-right">{me.login} <a href="/logout">Logout</a></li>
            </ul>
          </nav>
          <div className="container">
            {this.props.children}
          </div>
        </div>
      )
    } else {
      return (
        <div onClick={this.onClick} className="container">
          <header role="banner">
            <h1>LABELR</h1>
            <p>Don&apos;t even try to label me, yo. Or do and see if I care. Whatevs.&trade;</p>
          </header>
          <div>
            <a href="/login" className="button button-large">
              <span className="mega-octicon octicon-mark-github"></span> Login with GitHub
            </a>
          </div>
        </div>
      )
    }
  }
})
