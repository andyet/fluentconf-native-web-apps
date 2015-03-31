import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import RepoItem from '../views/repo-item'

export default React.createClass({
  mixins: [ampersandMixin],
  displayName: 'Repos',
  componentWillMount () {
    this.props.repos.fetch()
  },
  render () {
    const {repos} = this.props

    return (
      <div>
        <h2>Repositories</h2>
        <div>
          {repos.map((repo) => {
            return (<RepoItem key={repo.id} {...repo.toJSON()}/>)
          })}
        </div>
      </div>
    )
  }
})
