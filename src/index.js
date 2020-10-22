import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Table from './table'
import Form from './form'

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

  handleSubmit=(character)=>{
  
    this.setState({characters: [...this.state.characters, character]})


  }



  render() {
   
    return (
      <div className="container">
        <h1>Hello, React!</h1>
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))