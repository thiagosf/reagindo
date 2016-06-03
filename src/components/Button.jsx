import React, { Component } from 'react'

export default class Button extends Component {
  getClassName() {
    return "btn btn-" + this.props.type
  }

  render() {
    return (
      <button 
        className={this.getClassName()} 
        onClick={this.props.onClick} 
        style={this.props.style} 
        >{this.props.children}</button>
    )
  }
}

Button.defaultProps = { type: 'primary', style: null }
