import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { clickCount: props.initialCount}
  }
  addOne = () => {
    this.setState({ clickCount : this.state.clickCount + 1 });
  }
  subOne = () => {
    this.setState({ clickCount : this.state.clickCount - 1 });
  }
  render(){
    return (
      <div>
        <h1>Hi world</h1>
        <p>Click Count: {this.state.clickCount }</p>
        <button type="button" onClick={this.addOne}>+1</button>
        <button type="button" onClick={this.subOne}>-1</button>
      </div>
    )
  }
}

ReactDOM.render(<App initialCount={10}/>,document.getElementById('react-app'))
