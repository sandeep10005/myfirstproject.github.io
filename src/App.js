import React from 'react';
import Home from './Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Switch, Route, Redirect } from 'react-router-dom';
import Service from './Service';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
//import Error from './error';
//import './App.css';

const App = () => {
  return (
    <div>
       <Navbar/> 
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/"/>
        {/* <Route component="/error"/> */}
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
