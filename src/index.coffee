React = require 'react'
ReactDOM = require 'react-dom'
Header = require './elements/header'

{div, h2, p, button, span} = React.DOM

Button = React.createClass
  getDefaultProps: ->
    type: 'primary'
    style: null
  getClassName: ->
    "btn btn-" + @props.type
  render: ->
    button
      className: @getClassName()
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
        div 
          className: 'col-sm-6'
          @clickLog()
        div 
          className: 'col-sm-12'
          div 
            className: 'loader'
            span className: 'item-1'
            span className: 'item-2'
            span className: 'item-3'


GreetBoxFactory = React.createFactory GreetBox
ReactDOM.render(
  React.createElement(GreetBoxFactory, name: 'Fulano')
  document.getElementById('content')
  )
