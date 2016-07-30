import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader, PostTable } from '../components'
import { removePost, fetchPosts } from '../actions/post'

class PostsTableContainer extends Component {
  componentDidMount() {
    const { fetchPosts, page } = this.props
    fetchPosts(page)
  }
  getLoader() {
    if (this.props.isFetching) return <Loader />
  }
  render() {
    return(
      <div>
        {this.getLoader()}
        <PostTable {...this.props} onDestroy={this.props.onDeletePost} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.post
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
