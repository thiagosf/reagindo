import React, { Component } from 'react'
import { div, h2 } from 'react-dom'

export default class NoMatch extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-6">
          <h2>Ooops.. página não encontrada</h2>
        </div>
      </div>
    )
  }
}
