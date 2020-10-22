import React, {Component} from 'react'
//import ReactDOM from 'react-dom'
import './index.css'

function TableHead(){
    
return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>

)


}

function TableBody(props){
const characters = props.characterData.map(function(e,i){
return (<tr key={i}>
        <td>{e.name}</td>
        <td>{e.job}</td>
        <button onClick={()=>props.removeCharacter(i)}>Delete</button>
        </tr>)


})

return (
        <tbody>{characters}</tbody>

)

}



class Table extends React.Component{
// eslint-disable-next-line no-useless-constructor
constructor(props){
    super(props)
}

render(){
    const {characterData,removeCharacter} = this.props;
    
return (
    <div>
        <table id="customers">
            <TableHead />
            <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
        </table>
    </div>
)



}




}

export default Table 


