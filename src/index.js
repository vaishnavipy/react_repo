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

  handleClick =()=>{
    this.setState({color:"color-changed"})

  }

  // This is called when there is an update in state/props , and decides whethere to re-render the DOM based on true or false.
  // So technically in this program, this method gets called after you  try to chnage the color property with button ckikc , 
  shouldComponentUpdate(){
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.color;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.color;
  }

  render(){

    return(<div>
      <h1>My Favorite Color is:{this.state.color}</h1>
      <button onClick={this.handleClick}>Change Color</button>
    </div>)
  }
}

ReactDOM.render(<App favcolor="yellow"/>, document.getElementById('content'))