'use strict'

const Hapi = require('hapi')
const Immutable = require('immutable')
const fs = require('fs')
const util = require('util')

const port = process.env.PORT || 3000
const server = new Hapi.Server()

server.connection({ 
  host: '0.0.0.0', 
  port: port,
  routes: {
    cors: true
  }
})

server.route({
  method: 'GET',
  path: '/posts', 
  handler: (request, reply) => {
    const limit = parseInt(request.query.limit || 10)
    const page = parseInt(request.query.page || 10)
    const posts = Immutable.List(require('./posts.json')).map((item) => {
      let map = Immutable.Map(item)
      return map.set('title', `(${page}) ${map.get('title')}`)
    })
    return reply({
      success: true,
      data: posts,
      count: posts.length,
      page: page,
      limit: limit
    })
  }
})

server.route({
  method: 'GET',
  path: '/posts/{id}',
  handler: (request, reply) => {
    const id = request.params.id
    const list = Immutable.List(require('./posts.json'))
    const post = list.find(item => item.id == id)
    return reply({ success: true, data: post })
  }
})

server.route({
  method: 'POST',
  path: '/posts',
  handler: (request, reply) => {
    let posts = require('./posts.json')
    const post_count = posts.length
    let post = {
      id: post_count + 1,
      title: request.payload.title,
      author: request.payload.author,
      url: '#',
      created_utc: new Date()
    }
    return reply({ success: true, data: post })
  }
})

server.route({
  method: 'PUT',
  path: '/posts/{id}',
  handler: (request, reply) => {
    const id = request.params.id
    const list = Immutable.List(require('./posts.json'))
    const post = Immutable.Map(list.find(item => item.id == id))
      .set('title', request.payload.title)
      .set('author', request.payload.author)
    return reply({ success: true, data: post })
  }
})

server.start((err) => {
  if (err) throw err
  console.log('Server running at:', server.info.uri)
})
