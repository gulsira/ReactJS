import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar"
//import User from "./components/user"
import Users from "./components/Users"
class App extends Component{
//function App() {
  
render(){

  return (
    <div className="container">
      <Navbar title="User App"/>
      <hr/>
      <Users/>
      

      
  
    </div>
  );
}
}
export default App;
