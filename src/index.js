import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Table from './table'

class App extends Component {
  state={
    characters : []
    
  }
  removeCharacter =(index) =>{
    const {characters} = this.state;

    this.setState({characters : characters.filter(function(e,i){
      return i !== index
    })})


  }



  render() {
   
    return (
      <div className="container">
        <h1>Hello, React!</h1>
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))