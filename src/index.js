import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//This App pulls data for the wikipeadi API and renders it as an unordered List   
class App extends Component {
  state={
    result:[]
  }



  componentDidMount() {

    const  url= 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';

    fetch(url)
    .then(response => response.json())
    .then(data=> {
      console.log(data)
      this.setState({result:data})

    })




  }




render(){
  const {result} = this.state;
  //console.log(result)
  const my_list = result.map(function(e,i){
  return <li key={i}>{e}</li>
  })

  return(
    <div>
      <ul>{my_list}</ul>
    </div>
  )

}
 
}

ReactDOM.render(<App />, document.getElementById('content'))