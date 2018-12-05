import React from "react";

class Login extends React.Component{

    render(){
        return(

            <div className="container">
            	            <div className="row">
            	                <div className="col-md-5">
            	                    <form>
            	                       <div className="form-group">
            	                          <label htmlFor="username" className="username">UserName</label>
            	                          <input type="text" className="form-control" name="username" ></input>
            	                       </div>  
            	                       <div className="form-group">
            	                          <label htmlFor="password" className="password">Password</label>
            	                          <input type="text" className="form-control" name="password" ></input>
            	                       </div>  
            	                       <div className="form-group">
         	                             <button  className="btn btn-info" type="submit">submit</button>
                                       </div>
            	                    </form> 
            	                </div>
            	            </div>
             </div>
             
        );
    }
}

export default Login