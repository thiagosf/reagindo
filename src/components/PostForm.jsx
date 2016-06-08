import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Button } from './'

const PostForm = ({ title = '', author = '' }) => {
  return (
    <form>
      <div className="form-group">
        <label>Titulo</label>
        <input type="text" className="form-control" value={title} />
      </div>
      <div className="form-group">
        <label>Autor</label>
        <input type="text" className="form-control" value={author} />
      </div>
      <div className="text-center">
        <Button success large>Salvar</Button>
      </div>
      <div className="other-actions">
        <Link to="/posts" className="btn btn-warning">Cancelar</Link>
      </div>
    </form>
  )
}

PostForm.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string
}

export default PostForm
