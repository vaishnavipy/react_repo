import React, {Component} from 'react'
//import ReactDOM from 'react-dom'
import './index.css'

class Form extends React.Component{
state={
    name:'',
    job:''
}

handleChange=(event)=>{
let {name,value} = event.target;
this.setState({[name]:value})

}

submitForm=()=>{
this.props.handleSubmit(this.state);
this.setState({name:'',job:''})

}


render(){
   
  
     return(
        <div>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name}></input>
            <label for="job">Job</label>
            <input id="job" name="job" onChange={this.handleChange} value={this.state.job}></input>
            <button type="submit" onClick={this.submitForm}>Submit</button>
        </div>
    )
}



}

export default Form;