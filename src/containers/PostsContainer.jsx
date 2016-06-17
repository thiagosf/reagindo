import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { newPost } from '../actions/post'
import { setTitle } from '../actions/structure'

class PostsContainer extends Component {
  render() {
    this.props.setTitle('Posts')
    return(
      <div>
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
    },
    setTitle: (title) => {
      return dispatch(setTitle(title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
