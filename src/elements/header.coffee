React = require 'react'

{header, h1, hr} = React.DOM

Header = React.createClass
  render: ->
    header 
      className: 'main-header'
      h1 null, 'Reagindo'
      hr null

module.exports = Header
