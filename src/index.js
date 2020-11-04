import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//This App pulls data for the wikipeadi API and renders it as an unordered List   
class App extends Component {
  constructor(props){
    super(props);
    this.state={color:"red"}
  }

// This method is called during Mounting,before render. So the state properties are changed here naturally before being rendered. 
//This method is also called first at state or property update
/*  static getDerivedStateFromProps(props,state){

    return {color:props.favcolor}
  } */

  //ComponnentDidMount is truggered in Mounting, after it is rendered
  componentDidMount=() =>{

    setTimeout(()=>{
      this.setState({color:"white"})
    },1000)
  }

  render(){

    return(<div>
      <h1>My Favorite Color is:{this.state.color}</h1>
    </div>)
  }
}

ReactDOM.render(<App favcolor="yellow"/>, document.getElementById('content'))