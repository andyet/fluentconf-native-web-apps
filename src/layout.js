import React from 'react'
import app from 'ampersand-app'
import localLinks from 'local-links'


export default React.createClass({
  render() {
    return (
      <div onClick={this.onClick}>
        <h1>Hi</h1>
        <nav>
          <a href='/'>home</a>
          <a href='/howls'>howls</a>
        </nav>
        {this.props.children}
      </div>
    )
  },
  onClick(event) {
    var pathname = localLinks.getLocalPathname(event)
    if (pathname) {
      event.preventDefault()
      app.router.history.navigate(pathname, { trigger: true })
    }
  }
})
