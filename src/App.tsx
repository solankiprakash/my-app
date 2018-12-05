import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from  "./Home";
import About from "./About";
import Topics from "./Topics";



class App extends Component {

  
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  height="300px" width="250px"  />
      </header>
  <Router>
    <div>
        <nav className="navbar navbar-expand-lg bg-info navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" >About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/topics">Topics</Link>
                </li>
            </ul>
        </nav>
      <hr />   
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/topics" component={Topics} />
         
    </div>
  </Router>
</div>
        
    );
  }
}

export default App;
