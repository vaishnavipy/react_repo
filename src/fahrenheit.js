import React,{Component} from "react";


class Fahrenheit extends React.Component{

    state={fahrenheit:""}

    handleChange=(event)=>{

        this.props.setFahrenheit(event.target.value)

        this.setState({fahrenheit:event.target.value})

    }


    render(){
        let fahrenheitInput;
        if(this.props.convertedFahrenheit !== ""){
            fahrenheitInput = this.props.convertedFahrenheit;
        }else{
            fahrenheitInput = this.state.fahrenheit

        }

        return(<div>
             <p>Enter temperature in Fahrenheit:</p>
            <input type="text" value={fahrenheitInput} onChange={this.handleChange} />
        </div>)
    }


}

export default Fahrenheit;