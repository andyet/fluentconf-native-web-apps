import React from 'react'

export default React.createClass({
  displayName: 'Label',
  render() {
    const {color, name} = this.props
    return (
      <div className='label'>
        <span className='label-color' style={{backgroundColor: color}}>&nbsp;</span>
        <input value={name}/>
        <span className='octicon octicon-pencil'></span>
        <span className='octicon octicon-x'></span>
      </div>
    )
  }
})
