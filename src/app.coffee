React = require 'react'
ReactDOM = require 'react-dom'

Header = require './elements/header'
Loader = require './components/loader'

{div, h2, p, button, span} = React.DOM
{Router, Route, Link, browserHistory} = require 'react-router'

Button = React.createClass
  getDefaultProps: ->
    type: 'primary'
    style: null
  render: ->
    button
      className: "btn btn-#{@props.type}"
      onClick: @props.onClick
      style: @props.style
      @props.name

GreetBox = React.createClass
  getDefaultProps: ->
    name: 'Fulano'
    items: []
  buttonClick: (e) ->
    items = @props.items
    items.push 'Clicastes! ' + e.target.className
    @setState
      items: items
  clickLog: ->
    for item, i in @props.items
      p key: 'item-'+i, item
  buttons: ->
    self = @
    ['primary', 'danger', 'info', 'default', 'warning'].map (type) ->
      React.createElement(Button, key: 'button-' + type, type: type, name: 'Clique aqui', onClick: self.buttonClick, style: { marginRight: '10px' })
  render: ->
    div 
      className: 'container-fluid'
      div 
        className: 'row'
        div 
          className: 'col-sm-6'
          React.createElement(Header)
          h2 className: 'header', @props.name
          p null, 'Lorem ipsum dolor'
          div 
            className: 'buttons'
            @buttons()
          React.createElement(Loader, color: 'blue-grey')
        div 
          className: 'col-sm-6'
          @clickLog()

GreetBoxFactory = React.createFactory GreetBox
ReactDOM.render(
  React.createElement(GreetBoxFactory, name: 'Fulano')
  document.getElementById('content')
  )

# ReactDOM.render(
#   React.createElement(
#     Router 
#       history: browserHistory
#   )
# ), document.getElementById('content')

# RouterFactory = React.createFactory Router
# ReactDOM.render(
#   React.createElement(RouterFactory, history: browserHistory, React.createElement(Route, path: '/', component: GreetBox))
#   document.getElementById('content')
#   )
