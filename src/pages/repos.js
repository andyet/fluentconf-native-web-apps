import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

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
            return (<div><span className="mega-octicon octicon-repo"></span> {repo.full_name}</div>)
          })}
        </div>
      </div>
    )
  }
})
