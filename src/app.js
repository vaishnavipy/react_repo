import React, {Component} from "react";

import Celsius from "./celsius"

import Fahrenheit from  "./fahrenheit"

class App extends React.Component{

    state={celsius:"", fahrenheit:"",boil:"not boil"}
    
    setCelsius =(celsiusInput)=>{
      let boilText;
      celsiusInput>=100 ? boilText="boil" : boilText="not boil";
      let convertedFahrenheit ;

      //Celius to Fahrenheit
      if(celsiusInput !== ""){
        convertedFahrenheit  = (celsiusInput*(9/5))+32;}
        else{

          convertedFahrenheit="";
        }

      this.setState({celsius:celsiusInput,boil:boilText,fahrenheit:convertedFahrenheit})

    }

    setFahrenheit=(fahrenheitInput)=>{
      let boilText;

      fahrenheitInput>=212 ? boilText="boil" : boilText="not boil";
      let convertedCelsius;
      //Convert Fahrenheit to Celsius

      if(fahrenheitInput !== ""){
        convertedCelsius = (fahrenheitInput - 32)*(5/9);
      }
      else{
        convertedCelsius ="";
      }

      this.setState({fahrenheit:fahrenheitInput,boil:boilText,celsius:convertedCelsius})


    }


    render(){
      return(<div>
        <Celsius setCelsius={this.setCelsius} convertedCelsius={this.state.celsius}/>
        <Fahrenheit setFahrenheit={this.setFahrenheit} convertedFahrenheit={this.state.fahrenheit}/>
        <p>The water would {this.state.boil} </p>
      </div>)


    }



}
  
       
     
export default App;