import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader, PostForm } from '../components'
import { fetchPost, sendPost } from '../actions/posts'

class PostFormContainer extends Component {
  componentDidMount() {
    const { fetchPost, params } = this.props
    fetchPost(params.id)
  }
  getLoader() {
    if (this.props.isFetching) return <Loader />
  }
  getForm() {
    if (!this.props.isFetching) {
      const { id, post, sendPost } = this.props
      return (
        <PostForm 
          action={`/posts/${id}`} 
          method="post" 
          post={post} 
          onSubmit={sendPost}
          />
      )
    }
  }
  render() {
    return (
      <div>
        {this.getLoader()}
        {this.getForm()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.posts.isFetching,
    post: state.posts.post,
    id: state.posts.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (id) => {
      return dispatch(fetchPost(id))
    },
    sendPost: (e, form) => {
      return dispatch(sendPost(e, form))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainer)
