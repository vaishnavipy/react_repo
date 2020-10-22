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


render(){
    const {handleSubmit} = this.props;
    const {name,job} = this.state;
     return(
        <div>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name}></input>
            <label for="job">Job</label>
            <input id="job" name="job" onChange={this.handleChange} value={this.state.job}></input>
            <button type="submit" onClick={()=>handleSubmit(this.state)}>Submit</button>
        </div>
    )
}



}

export default Form;