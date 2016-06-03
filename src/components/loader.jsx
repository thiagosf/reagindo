import React, { Component } from 'react'
const { PropTypes } = React;

export default class Loader extends Component {
  getClassName() {
    return 'xbox-loader ' + this.props.color
  }

  render() {
    return (
      <div className={this.getClassName()}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }
}

Loader.defaultProps = { color: 'green' }
Loader.propTypes = {
  color: PropTypes.string
};
