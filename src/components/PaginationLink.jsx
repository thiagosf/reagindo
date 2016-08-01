import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class PaginationLink extends Component {
  static defaultProps = {
    current_link: false,
    disabled_link: false
  }
  static propTypes = {
    current_link: PropTypes.bool,
    disabled_link: PropTypes.bool
  }
  classLi() {
    return classNames({
      'active': this.props.current_link,
      'disabled': this.props.disabled_link
    })
  }
  render() {
    return (
      <li className={this.classLi()}>
        <a href="#" onClick={this.props.onClick}>{this.props.label}</a>
      </li>
    )
  }
}
