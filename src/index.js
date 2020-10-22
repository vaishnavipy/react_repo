import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Table from './table'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello, React!</h1>
        <Table/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))