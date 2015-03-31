import React from 'react'

export default React.createClass({
  render () {
    const {full_name, url} = this.props
    return (
      <div>
        <span className="octicon octicon-repo"></span> <a href={url}>{full_name}</a>
      </div>
    )
  }
})
