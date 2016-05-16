React = require 'react'

{div, span} = React.DOM

Loader = React.createClass
  getDefaultProps: ->
    color: 'green'
  render: ->
    div 
      className: "xbox-loader #{@props.color}"
      span null
      span null
      span null

module.exports = Loader
