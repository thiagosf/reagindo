import React, { Component } from 'react'
import classNames from 'classnames'
const { PropTypes } = React;

export default class Button extends Component {
  getClassName() {
    return classNames({
      'btn': true,
      'btn-primary': this.props.primary,
      'btn-warning': this.props.warning,
      'btn-danger': this.props.danger,
      'btn-info': this.props.info,
      'btn-default': this.props.default,
      'btn-xs': this.props.xsmall,
      'btn-sm': this.props.small,
      'btn-large': this.props.large
    })
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

Button.defaultProps = {
  type: 'button',
  styled: 'primary',
  size: ''
}

Button.propTypes = {
  type: PropTypes.string,
  primary: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  info: PropTypes.bool,
  default: PropTypes.bool,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool
}
