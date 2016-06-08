import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Loader, PostForm } from '../components'
import { fetchPost } from '../actions/posts'

class PostFormContainer extends Component {
  componentDidMount() {
    const { fetchPost, params } = this.props
    fetchPost(params.id)
  }
  getLoader() {
    if (this.props.isFetching) return <Loader />
  }
  render() {
    return (
      <div>
        {this.getLoader()}
        <PostForm {...this.props.post} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts.post,
    id: state.posts.id,
    isFetching: state.posts.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (id) => {
      return dispatch(fetchPost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainer)
