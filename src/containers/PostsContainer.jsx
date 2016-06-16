import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { newPost } from '../actions/post'

class PostsContainer extends Component {
  render() {
    return(
      <div>
        <header className="main-header">
          <h1>Posts</h1>
        </header>
        <div className="actions-box">
          <Link to="/posts/new" className="btn btn-primary btn-sm" onClick={this.props.newPost}>Novo post</Link>
        </div>
        {this.props.children}
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
    newPost: () => {
      return dispatch(newPost())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
