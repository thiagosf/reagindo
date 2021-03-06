import React, { Component } from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import { Button, Pagination } from './'

const postRow = (post, onDestroy) => {
  const thumbnail = () => {
    if (post.thumbnail != 'self') return <img src={post.thumbnail} height="30" />
  }

  const date = () => {
    return <span className="label label-default">{moment.unix(post.created_utc).format('LLL')}</span>
  }

  let edit_url = `/posts/${post.id}`
  let destroy_url = `/posts/${post.id}`
  const onClickDestroy = (e) => {
    if (confirm('tem certeza?')) {
      onDestroy(post)
    }
  }

  return (
    <tr key={post.id}>
      <td>{post.id}</td>
      <td className="text-center">{thumbnail()}</td>
      <td>{post.title}</td>
      <td>{post.author}</td>
      <td className="text-nowrap">{date()}</td>
      <td>
        <Link to={edit_url} className="btn btn-success btn-xs">Editar</Link>
        <span> </span>
        <Button type='button' danger xsmall onClick={onClickDestroy.bind(this)}>Deletar</Button>
      </td>
    </tr>
  )
}

export default class PostTable extends Component {
  render() {
    if (this.props.posts.length == 0) return false
    return(
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
            {this.props.posts.map(post => postRow(post, this.props.onDestroy))}
          </tbody>
        </table>
      </div>
    )
  }
}
