import React, { Component } from 'react'


class PaginationLink extends Component {
  render() {
    return(<li><a href={this.props.url}>{this.props.label}</a></li>)
  }
}

export default class Pagination extends Component {
  numbers(max) {
    let all = []
    let i = 1
    while (i <= max) {
      let key = `number-${i}`
      all.push(<PaginationLink key={key} label={i} url={`#${i}`} />)
      i++
    }
    return all
  }
  render() {
    return (
      <div>
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <PaginationLink key='previous' label='Previous' url='#1' />
            {this.numbers(10)}
            <PaginationLink key='next' label='Next' url='#2' />
          </ul>
        </nav>
      </div>
    )
  }
}
