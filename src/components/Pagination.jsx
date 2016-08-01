import React, { Component, PropTypes } from 'react'
import { FormattedPlural } from 'react-intl'
import { PaginationLink } from './'
import { translate } from '../helpers'

export default class Pagination extends Component {
  numbers(max, current_page) {
    let all = []
    let i = 1
    while (i <= max) {
      let key = `number-${i}`
      all.push(
        <PaginationLink
          key={key}
          label={i}
          current_link={current_page == i}
          onClick={this.onClick.bind(this, i)}
          />
      )
      i++
    }
    return all
  }
  onClick(page, e) {
    e.preventDefault()
    if (page != this.props.page) this.props.fetchPage(page)
  }
  nextClick(e) {
    e.preventDefault()
    let page = this.props.page + 1
    if (page > this.props.page_count) page = this.props.page_count
    if (!this.disableLink('next')) this.onClick(page, e)
  }
  prevClick(e) {
    e.preventDefault()
    let page = this.props.page - 1
    if (page < 1) page = 1
    if (!this.disableLink('prev')) this.onClick(page, e)
  }
  disableLink(direction) {
    if (direction == 'prev') {
      if (this.props.page == 1) return true
    } else if (direction == 'next') {
      if (this.props.page == this.props.page_count) return true
    }
    return false
  }
  render() {
    let messages = translate.getMessages(this.props)
    return (
      <div className="text-center">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <PaginationLink
              key='previous'
              label={messages['pagination.prev']}
              disabled_link={this.disableLink('prev')}
              onClick={this.prevClick.bind(this)}
              />
            {this.numbers(this.props.page_count, this.props.page)}
            <PaginationLink
              key='next'
              label={messages['pagination.next']}
              disabled_link={this.disableLink('next')}
              onClick={this.nextClick.bind(this)}
              />
          </ul>
        </nav>
        <p>
          <strong>{this.props.page_count} </strong>
          <FormattedPlural value={this.props.page_count}
            one={messages['pagination.page']}
            other={messages['pagination.pages']}
            />
        </p>
      </div>
    )
  }
}
