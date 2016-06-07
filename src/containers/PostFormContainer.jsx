import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Loader, Button } from '../components'
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
    return(
      <div>
        {this.getLoader()}
        <h1>{this.props.post.title}</h1>
        <form>
          <div className="form-group">
            <label>Titulo</label>
            <input type="text" className="form-control" />
          </div>
          <div className="text-center">
            <Button success large>Salvar</Button>
          </div>
          <div className="other-actions">
            <Link to="/posts" className="btn btn-warning">Cancelar</Link>
          </div>
        </form>
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
