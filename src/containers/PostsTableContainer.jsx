import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader } from '../components'
import { removePost, fetchPosts } from '../actions/posts'
import moment from 'moment'

export function postRow(post) {
  const thumbnail = () => {
    if (post.thumbnail != 'self') return <img src={post.thumbnail} height="30" />
  }

  const date = () => {
    return <span className="label label-default">{moment.unix(post.created_utc).format('LLL')}</span>
  }

  let edit_url = `/posts/${post.id}`
  let destroy_url = `/posts/${post.id}`

  return (
    <tr key={post.id}>
      <td>{post.id}</td>
      <td className="text-center">{thumbnail()}</td>
      <td>{post.title}</td>
      <td>{post.author}</td>
      <td className="text-nowrap">{date()}</td>
      <td>
        <a className="btn btn-success btn-xs" href={edit_url}>Editar</a>
        <span> </span>
        <a className="btn btn-danger btn-xs" href={destroy_url}>Deletar</a>
      </td>
    </tr>
  )
}

class PostsTableContainer extends Component {
  componentDidMount() {
    const { fetchPosts, page } = this.props
    fetchPosts(page)
  }
  getLoader() {
    if (this.props.isFetching) return <Loader />
  }
  render() {
    return(
      <div>
        {this.getLoader()}
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Imagem</th>
                <th>Titulo</th>
                <th>Autor</th>
                <th>Data</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.posts.map(post => postRow(post))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    page: state.posts.page,
    isFetching: state.posts.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (page) => {
      dispatch(fetchPosts(page))
    },
    onDeletePost: (id) => {
      dispatch(removePost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsTableContainer)
