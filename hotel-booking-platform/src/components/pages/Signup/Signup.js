import React from "react";
import '../Signup/Signup.css'

const Signup=()=>{
    return(
        <>
        <div className="container-fluid d-flex justify-content-center align-items-center custom-Signup-container mt-3">
            
            <div class="container mt-3 custom-form-container text-light  border rounded border-light p-3 " >
                            <h2 className="text-center text-light">SignUp</h2>
                            <form> 
                            <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter your name" required />
                        </div>
                                <div class="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" class="form-control" id="email" placeholder="Enter your email" required />
                                </div>
                                <div class="form-group">
                                    <label for="password">
                                        Password</label>
                                    <input type="password" class="form-control" id="subject" placeholder=" Set Password" required />
                                </div>
                                <button type="submit" class="btn btn-primary mx-auto d-block mt-2">Sign Up</button>
                            </form>
                        </div>
              
            </div>
       
        </>
    )
}
export default Signup;

