import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader, PostForm } from '../components'
import { fetchPost, createPost, updatePost } from '../actions/posts'

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
      const { id, post, createPost, updatePost } = this.props
      let submitAction = !id ? createPost : updatePost
      return (
        <PostForm 
          ref="form"
          action={`/posts/${id}`} 
          method="post" 
          post={post} 
          onSubmit={submitAction}
          />
      )
    }
  }
  componentDidUpdate() {
    if (this.refs.form) {
      if (this.props.isSending) {
        this.refs.form.lock()
      } else {
        this.refs.form.unlock()
      }
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
    isSending: state.posts.isSending,
    post: state.posts.post,
    id: state.posts.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (id) => {
      return dispatch(fetchPost(id))
    },
    createPost: (e, form) => {
      return dispatch(createPost(e, form))
    },
    updatePost: (e, form) => {
      return dispatch(updatePost(e, form))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainer)
