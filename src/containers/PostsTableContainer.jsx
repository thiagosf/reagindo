import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader, PostTable, Pagination } from '../components'
import { removePost, fetchPosts } from '../actions/post'

class PostsTableContainer extends Component {
  componentDidMount() {
    const { fetchPosts, page, pagination } = this.props
    console.log("componentDidMount", pagination);
    fetchPosts(page)
  }
  getLoader() {
    if (this.props.isFetching) return <Loader />
  }
  paginationParams() {
    return {
      page: this.props.page,
      page_count: this.props.page_count
    }
  }
  render() {
    return(
      <div>
        {this.getLoader()}
        <PostTable
          {...this.props}
          onDestroy={this.props.onDeletePost}
          />
        <Pagination
          {...this.paginationParams()}
          intl={this.props.intl}
          fetchPage={this.props.fetchPosts}
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state.pagination", state.pagination);
  return {
    ...state.post,
    intl: state.intl,
    pagination: state.pagination
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (page) => {
      dispatch(fetchPosts(page))
    },
    onDeletePost: (id) => {
      dispatch(removePost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsTableContainer)
