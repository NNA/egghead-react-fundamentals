import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {
  render() {
    let txt= this.props.txt
    let cat= this.props.cat
    return (
      <h1>Hello World : {txt} {cat}</h1>
    )
  }
}

App.PropTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"
}

export default App
