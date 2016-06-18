import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { newPost } from '../actions/post'
import { BaseContainer } from './'

class PostsContainer extends Component {
  render() {
    return(
      <BaseContainer title="Posts">
        <div className="actions-box">
          <Link to="/posts/new" className="btn btn-primary btn-sm" onClick={this.props.newPost}>Novo post</Link>
        </div>
        {this.props.children}
      </BaseContainer>
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
