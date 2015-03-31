import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],
  displayName: 'RepoDetailPage',
  render() {
    const {repo} = this.props
    let list
    if (repo.fetchedLabels) {
      if (repo.labels.length) {
        list = repo.labels.map((label) => {
          return (
            <div key={label.name} style={{backgroundColor: label.color}}>{label.name}</div>
          )
        })
      } else {
        list = (
          <p>No Labels</p>
        )
      }
    } else {
      list = (<p>Fetching Label...</p>)
    }
    return (
      <div>
        <h3>{repo.full_name}</h3>
        <h4>Labels</h4>
        <div>
          {list}
        </div>
      </div>
    )
  }
})
