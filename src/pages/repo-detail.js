import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import Label from '../views/label'

export default React.createClass({
  mixins: [ampersandMixin],
  displayName: 'RepoDetailPage',
  propTypes: {
    repo: React.PropTypes.object.isRequired
  },
  render () {
    const {repo} = this.props

    let list

    // if we've fetched 'em
    if (repo.fetchedLabels) {
      if (repo.labels.length) {
        list = repo.labels.map((label) => {
          return <Label key={label.name} label={label}/>
        })
      } else {
        list = (
          <p>No Labels</p>
        )
      }
    } else {
      list = <p>Fetching Labels...</p>
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
