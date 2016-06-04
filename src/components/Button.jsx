import React, { Component } from 'react'
const { PropTypes } = React;

export default class Button extends Component {
  getClassName() {
    return "btn btn-" + this.props.type
  }
  render() {
    return (
      <button 
        {...this.props}
        className={this.getClassName()}
        >{this.props.children}</button>
    )
  }
}

Button.defaultProps = { type: 'primary' }
Button.propTypes = {
  type: PropTypes.string
};
