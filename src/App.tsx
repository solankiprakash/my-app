import React, { Component } from "react";
import "./App.css";
import {connect} from 'react-redux';


class App extends Component<any> {
  constructor(props:any){
    super(props)
  }

  render() {
    const {posts} =this.props; 
    const listItems = posts.map((item:any) =>
                  <li key={item.id}>{item.name}{item.id}</li>);
    console.log("props",posts); 

  const  addPost =()=>{
      this.props.deletepost()
    }
      return( 
        <div>
           <div>hello</div>
           <div>
           
             <ul>{listItems}</ul>
             <button className="btn btn-success" onClick={addPost}>click me</button>
           </div>
             
         
         </div>
      
      );
  }
}

const mapStateToProps = (state:any)=>{
 return{
  posts:state.posts
 }
}

const mapDispatchToProps =(Dispatch:any)=>{
  return{
    deletepost :() =>{Dispatch({type:"ADD",payload:"this is rajesh added by dispatch in app component"})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
