import React, { useState } from "react";
import '../Login/Login.css'

const Login = () => {
    const [handleinputvalue,sethandleinputvalues]=useState("")

    const handleinput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        sethandleinputvalues((prev => ({
            ...prev,[name]:value
        })))
    }
    const handlesubmit = () => {
        console.log("handleinputvalue",handleinputvalue)
   }

    return(
        <>
        <div className="container-fluid d-flex justify-content-center align-items-center custom-login-container mt-3">
            
        <div class="container mt-3 custom-form-container text-light  border rounded border-light p-3 " >
                        <h2 className="text-center text-light">Login</h2>
                        <form> 
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" class="form-control" id="email" name="Email" placeholder="Enter your email" required onChange={handleinput} />
                            </div>
                            <div class="form-group">
                                <label for="password">
                                    Password</label>
                                <input type="password" class="form-control" id="subject" placeholder="Password" name="Password" required onChange={handleinput} />
                            </div>
                            <button  onClick={handlesubmit}type="submit" class="btn btn-primary mx-auto d-block mt-2">Login</button>
                        </form>
                    </div>
          
        </div>
        </>
    )
}
export default Login;

