import React,{Component} from "react";


class Celsius extends React.Component{
    
 state={celsiusInput:""}

 handleChange=(event)=>{

    this.props.setCelsius(event.target.value)

    this.setState({celsiusInput:event.target.value})

  
 }


 render(){
     let celsiusInput;
    if(this.props.convertedCelsius !== ""){
        celsiusInput= this.props.convertedCelsius;
    }
    else{
        celsiusInput=this.state.celsiusInput

    }

    return(<div>
        <p>Enter temperature in Celsius:</p>

        <input type="text" value={celsiusInput} onChange={this.handleChange} />
   
    </div>)



 }



}

export default Celsius;