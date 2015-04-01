import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import Label from '../views/label'

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
            <Label key={label.name} {...label.toJSON()}/>
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
        <ul>
          {list}
        </ul>
      </div>
    )
  }
})
