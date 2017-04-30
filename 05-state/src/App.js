import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      txt: 'initialized txt',
      cat: '0'
    }
  }
  updateIt(e){
    this.setState({txt: e.target.value})
  }
  render() {
    return (
      <div>
        <input type='text' onChange={this.updateIt.bind(this)}></input>
        <h1>{this.state.txt} - {this.state.cat}</h1>
      </div>
    )
  }
}

export default App
