import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostsContainer extends Component {
  render() {
    return(
      <div>
        <header className="main-header">
          <h1>Posts</h1>
        </header>
        {this.props.children}
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
    onUpdatePost: (post) => {
      console.log('onUpdatePost', post);
    },
    onDeletePost: (id) => {
      console.log('onDeletePost', id);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
