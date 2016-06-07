import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostsTableContainer from './PostsTableContainer'
import PostFormContainer from './PostFormContainer'

class PostsContainer extends Component {
  render() {
    return(
      <div>
        <header className="main-header">
          <h1>Posts</h1>
        </header>
        <PostsTableContainer />
        <PostFormContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreatePost: (post) => {
      console.log('onCreatePost', post);
    },
    onDeletePost: (id) => {
      console.log('onDeletePost', id);
      // dispatch(removePost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
