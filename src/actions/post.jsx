import request from 'superagent'
import { translate } from '../helpers'

import {
  REMOVING_POST,
  REMOVED_POST,
  REMOVED_POST_ERROR,
  REQUEST_POSTS,
  REQUEST_POST,
  RECEIVE_POSTS,
  RECEIVE_POST,
  SENDING_POST,
  CREATED_POST,
  CREATED_POST_ERROR,
  UPDATED_POST,
  UPDATED_POST_ERROR,
  CREATE_POST,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_ERROR,
  NOTIFICATION_INFO
} from '../constants'

export const newPost = () => {
  return {
    type: CREATE_POST
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

const createdPost = (id, message, message_type) => {
  return {
    type: CREATED_POST,
    id,
    message,
    message_type
  }
}

const errorToSavePost = (message, message_type) => {
  return {
    type: CREATED_POST_ERROR,
    message,
    message_type
  }
}

const updatedPost = (id, message, message_type) => {
  return {
    type: UPDATED_POST,
    id,
    message,
    message_type
  }
}

const errorToUpdatePost = (message, message_type) => {
  return {
    type: UPDATED_POST_ERROR,
    message,
    message_type
  }
}

export const removedPost = (post, message, message_type) => {
  return {
    type: REMOVED_POST,
    post,
    message,
    message_type
  }
}

export const errorToRemovePost = (post, message, message_type) => {
  return {
    type: REMOVED_POST_ERROR,
    post,
    message,
    message_type
  }
}

export const removingPost = (post, message, message_type) => {
  return {
    type: REMOVING_POST,
    post,
    message,
    message_type
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
  return (dispatch, store) => {
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
        let random = Math.floor(Math.random() * (3 - 1)) + 1;
        err = random % 2 == 0
        if (!err) {
          if (res.status == 200) {
            return dispatch(createdPost(res.body.id, 'posts.created', NOTIFICATION_SUCCESS))
          }
        }
        return dispatch(errorToSavePost('posts.created_error', NOTIFICATION_ERROR))
      })
  }
}

export function updatePost(e, form) {
  return (dispatch, store) => {
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
        let random = Math.floor(Math.random() * (3 - 1)) + 1;
        err = random % 2 == 0
        if (!err) {
          if (res.status == 200) {
            return dispatch(updatedPost(res.body.id, 'posts.updated', NOTIFICATION_SUCCESS))
          }
        }
        return dispatch(errorToUpdatePost('posts.updated_error', NOTIFICATION_ERROR))
      })
  }
}

export const removePost = (post) => {
  return (dispatch, store) => {
    dispatch(removingPost(post, 'posts.removing', NOTIFICATION_INFO))
    request
      .delete('http://www.mocky.io/v2/57561bc30f0000d2052eff47')
      .set('Accept', 'application/json')
      .type('form')
      .send({ id: post.id })
      .end((err, res) => {
        let random = Math.floor(Math.random() * (3 - 1)) + 1;
        err = random % 2 == 0
        if (!err) {
          if ((res && res.status == 201) || true) {
            return dispatch(removedPost(post, 'posts.removed', NOTIFICATION_SUCCESS))
          }
        }
        return dispatch(errorToRemovePost(post, 'posts.removed_error', NOTIFICATION_ERROR))
      })
  }
}
