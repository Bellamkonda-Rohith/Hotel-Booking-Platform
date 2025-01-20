import React from "react";
import '../ContactUS/ContactUs.css'

const ContactUs = () => {
    return (
        <>

            <div className="container-fluid coustom-contactus mt-3">
                <div className="justify-content-center align-items-center  ">

                    <div class="container mt-3 custom-form-container text-light  border rounded border-light p-3" >
                        <h2 className="text-center text-light">Contact Us</h2>
                        <form> <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter your name" required />
                        </div>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter your email" required />
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" class="form-control" id="subject" placeholder="Subject" required />
                            </div> <div class="form-group"> <label for="message">Message</label>
                                <textarea class="form-control" id="message" rows="4" placeholder="Enter your message" required>
                                </textarea>
                            </div>
                            <button type="submit" class="btn btn-primary mx-auto d-block mt-2">Submit</button>
                        </form>
                    </div>

                </div>              
                  </div>
        </>
    )
}
export default ContactUs;
