import request from 'superagent'

import {
  REMOVE_POST,
  REQUEST_POSTS,
  REQUEST_POST,
  RECEIVE_POSTS,
  RECEIVE_POST,
  SENDING_POST,
  SAVED_POST
} from '../constants'

export const removePost = (id) => {
  return {
    type: REMOVE_POST,
    id
  }
}

export function requestPosts(page) {
  return {
    type: REQUEST_POSTS,
    page
  }
}

export function requestPost(id) {
  return {
    type: REQUEST_POST,
    id
  }
}

export const receivePosts = (page, posts) => {
  return {
    type: RECEIVE_POSTS,
    page,
    posts: posts
  }
}

export const receivePost = (id, post) => {
  return {
    type: RECEIVE_POST,
    id,
    post: post
  }
}

export const sendingPost = (form) => {
  return {
    type: SENDING_POST,
    form
  }
}

export const savedPost = (id, message) => {
  return {
    type: SAVED_POST,
    id,
    message
  }
}

export function fetchPosts(page) {
  return dispatch => {
    dispatch(requestPosts(page))
    // Access-Control-Allow-Origin: *
    request
      .get('http://www.mocky.io/v2/575618730f00007e052eff46')
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          // dispatch de erro
        } else {
          dispatch(receivePosts(page, res.body))
        }
      })
  }
}

export function fetchPost(id) {
  return dispatch => {
    dispatch(requestPost(id))
    // Access-Control-Allow-Origin: *
    request
      .get('http://www.mocky.io/v2/57561bc30f0000d2052eff47')
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          // dispatch de erro
        } else {
          dispatch(receivePost(id, res.body))
        }
      })
  }
}

export function createPost(e, form) {
  return dispatch => {
    e.preventDefault()
    dispatch(sendingPost(form))
    const data = {
      title: form.refs.title.value,
      author: form.refs.author.value
    }
    request
      .post('http://www.mocky.io/v2/57561bc30f0000d2052eff47')
      .set('Accept', 'application/json')
      .type('form')
      .send(data)
      .end((err, res) => {
        if (err) {
          // dispatch de erro
        } else {
          if (res.status == 200) {
            dispatch(savedPost(res.body.id))
          } else {
            // lanca erro
          }
        }
      })
  }
}

export function updatePost(e, form) {
  return dispatch => {
    e.preventDefault()
    dispatch(sendingPost(form))
    const data = {
      title: form.refs.title.value,
      author: form.refs.author.value
    }
    request
      .post('http://www.mocky.io/v2/57561bc30f0000d2052eff47')
      .set('Accept', 'application/json')
      .type('form')
      .send(data)
      .end((err, res) => {
        if (err) {
          // dispatch de erro
        } else {
          if (res.status == 200) {
            dispatch(savedPost(res.body.id, 'Post atualizado com sucesso!'))
          } else {
            // lanca erro
          }
        }
      })
  }
}
