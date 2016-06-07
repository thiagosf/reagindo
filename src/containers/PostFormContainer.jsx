import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader, Button } from '../components'
import { removePost, fetchPosts } from '../actions/posts'

class PostFormContainer extends Component {
  componentDidMount() {
    // const { fetchPosts, page } = this.props
    // fetchPosts(page)
  }
  getLoader() {
    if (this.props.isFetching) return <Loader />
  }
  render() {
    return(
      <div>
        {this.getLoader()}
        <form>
          <div className="form-group">
            <label>Titulo</label>
            <input type="text" className="form-control" />
          </div>
          <Button success large>Salvar</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainer)
