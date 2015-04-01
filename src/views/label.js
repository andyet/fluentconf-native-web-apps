import React from 'react'

export default React.createClass({
  displayName: 'Label',
  getInitialState () {
    const {name, color} = this.props.label
    return {
      name: name,
      color: color,
      editing: false
    }
  },
  propTypes: {
    label: React.PropTypes.object.isRequired
  },
  onChangeName (event) {
    const input = event.target
    let res = {}
    res[input.name] = input.value
    this.setState(res)
  },
  onChangeColor (event) {
    const color = event.target.value
    this.setState({color: color.slice(1)})
  },
  onDeleteClick (event) {
    this.props.label.destroy()
    event.preventDefault()
  },
  onToggleEditClick (event) {
    this.setState({editing: !this.state.editing})
  },
  onSubmit (e) {
    e.preventDefault()
    this.props.label.update(this.state)
    this.setState({editing: false})
  },
  render () {
    const {color, name} = this.state

    const cssColor = '#' + color

    if (this.state.editing) {
      return (
        <form onSubmit={this.onSubmit} className='label'>
          <span className='label-color' style={{backgroundColor: cssColor}}>&nbsp;</span>
          <input value={name} onChange={this.onChangeName} name='name'/>
          <input value={cssColor} onChange={this.onChangeColor} name='color'/>
          <button type='submit' className='button button-small'>Save</button>
          <button onClick={this.onToggleEditClick} type='button' className='button button-small button-unstyled'>cancel</button>
        </form>
      )
    } else {
      return (
        <div className='label'>
          <span className='label-color' style={{backgroundColor: cssColor}}>&nbsp;</span>
          <span>{name}</span>
          <span className='octicon octicon-pencil' onClick={this.onToggleEditClick}></span>
          <span className='octicon octicon-x' onClick={this.onDeleteClick}></span>
        </div>
      )
    }
  }
})
