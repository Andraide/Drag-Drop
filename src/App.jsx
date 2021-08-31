import React, { Component, createContext } from "react";
import {hot} from "react-hot-loader";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router/routes";


class App extends React.Component{
  render(){
    return(
            <Router history={history}>
                <Routes />    
            </Router>
    );
  }
}


export default hot(module)(App);