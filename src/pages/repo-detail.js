import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],
  displayName: 'RepoDetailPage',
  render() {
    const {repo} = this.props
    const style = {
      backgroundColor: repo.color
    }
    return (
      <div>
        <h3>{repo.full_name}</h3>
        <div>
          {repo.labels.map((label) => {
            return (<div style={{backgroundColor: label.color}}>{label.name}</div>)
          })}
        </div>
      </div>
    )
  }
})
