import React ,{useState} from'react'
import {connect} from 'react-redux'
import Button from "./component/Button";
import './App.css';


const App=(props)=> {

    return (
    <div className="App">
     <div>
         <Button title="-"/>
         <span >{props.number}</span>
             <Button title="+"/>
     </div>
    </div>
  );
};
const mapStateToProps =(state)=>{
 return{
     number: state.count
 }
};


export default connect(mapStateToProps)(App);
