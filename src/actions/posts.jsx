import fetch from 'isomorphic-fetch'

import {
  REMOVE_POST,
  REQUEST_POSTS,
  RECEIVE_POSTS
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

export const receivePosts = (page, json) => {
  return {
    type: RECEIVE_POSTS,
    page,
    posts: json.data.children.map(child => child.data)
  }
}

export function fetchPosts(page) {
  return dispatch => {
    dispatch(requestPosts(page))
    return fetch("https://www.reddit.com/r/reactjs.json")
      .then(response => response.json())
      .then(json => dispatch(receivePosts(page, json)))
  }
}
