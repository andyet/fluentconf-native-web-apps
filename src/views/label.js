import React from 'react'

export default React.createClass({
  displayName: 'Label',
  render() {
    const {color, name} = this.props
    return (
      <div>
        <button style={{backgroundColor: color}} className='button'>{name}</button>
        <button style={{backgroundColor: color}} className='button'>delete</button>
      </div>
    )
  }
})
