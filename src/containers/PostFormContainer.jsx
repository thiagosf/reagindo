import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Loader, PostForm } from '../components'
import { fetchPost, createPost, updatePost } from '../actions/post'

class PostFormContainer extends Component {
  componentDidMount() {
    const { fetchPost, params } = this.props
    if (params.id) {
      fetchPost(params.id)
    }
  }
  getLoader() {
    if (this.props.isFetching) return <Loader />
  }
  getForm() {
    if (!this.props.isFetching) {
      const { id, post, createPost, updatePost, newPost } = this.props
      let submitAction = !id ? createPost : updatePost
      return (
        <PostForm 
          ref="form"
          action={`/posts/${id}`} 
          id={id}
          method="post" 
          post={post} 
          newPost={newPost} 
          onSubmit={submitAction}
          />
      )
    }
  }
  componentDidUpdate() {
    const { isSending, isSaved, params } = this.props
    const { form } = this.refs
    const { router } = this.context

    if (form) {
      if (isSending) {
        form.lock()
      } else {
        form.unlock()
      }
      if (isSaved) {
        router.push('/posts')
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
    ...state.post,
    routing: state.routing
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

PostFormContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainer)
