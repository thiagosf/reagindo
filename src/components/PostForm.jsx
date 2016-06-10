import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Button } from './'

class PostForm extends Component {
  handleSubmit(e) {
    this.props.onSubmit(e, this)
  }
  lock() {
    this.refs.button.disabled = true
  }
  unlock() {
    this.refs.button.disabled = false
  }
  render() {
    let { title, author } = this.props.post
    return (
      <form action={this.props.action} method={this.props.method} onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Titulo</label>
          <input type="text" className="form-control" ref="title" defaultValue={title} />
        </div>
        <div className="form-group">
          <label>Autor</label>
          <input type="text" className="form-control" ref="author" defaultValue={author} />
        </div>
        <div className="text-center">
          <Button success large type="submit" ref="button">Salvar</Button>
        </div>
        <div className="other-actions">
          <Link to="/posts" className="btn btn-warning">Cancelar</Link>
        </div>
      </form>
    )
  }
}

PostForm.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string
  }),
  action: PropTypes.string,
  method: PropTypes.string,
  onSubmit: PropTypes.func
}

export default PostForm
