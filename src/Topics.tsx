import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from  "./Login";



class Topics extends React.Component{
render(){
    return(
    <div className="row">
    <Router>
        <div className="col-md-6">
           <nav className="navbar ">
                <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/login" >Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/topics">Anguler</Link>
                    </li>
                </ul>
           </nav>
        
           
           <Route exact path="/login" component={Login} />
           
                <h5>
                        State management in general
                        On its own, React is a useful library for creating composable views. However, React doesn't prescribe any specific way of synchronizing data throughout your application. As far as a React component is concerned, data flows down through its children through the props you specify on each element. Some of those props might be functions that update the state one way or another, but how that happens is an open question.
                        Because React on its own does not focus on application state management, the React community uses libraries like Redux and MobX.
                        Redux relies on synchronizing data through a centralized and immutable store of data, and updates to that data will trigger a re-render of our application. State is updated in an immutable fashion by sending explicit action messages which must be handled by functions called reducers. Because of the explicit nature, it is often easier to reason about how an action will affect the state of your program.
                </h5>

        </div>
          </Router>
     </div>
     
    );
  }
}
export default Topics;