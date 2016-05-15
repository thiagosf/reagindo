React = require 'react'
ReactDOM = require 'react-dom'
Header = require './elements/header'

{div, h2, p} = React.DOM

GreetBox = React.createClass
  getDefaultProps: ->
    name: 'Fulano'
  render: ->
    div 
      className: 'wrapper'
      React.createElement(Header)
      h2 className: 'header', @props.name
      p null, 'Lorem ipsum dolor'

GreetBoxFactory = React.createFactory GreetBox
ReactDOM.render(
  React.createElement(GreetBoxFactory, name: 'Fulano')
  document.getElementById('content')
  )
