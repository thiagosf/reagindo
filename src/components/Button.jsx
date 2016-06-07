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
      'btn-success': this.props.success,
      'btn-xs': this.props.xsmall,
      'btn-sm': this.props.small,
      'btn-lg': this.props.large,
      'btn-block': this.props.block
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
  success: PropTypes.bool,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  block: PropTypes.bool
}
