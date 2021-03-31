import React from 'react'

const ContactForm=()=> {
    return (
        <>
          
            <div className="col-md-6 shadow-lg p-5">
            <form>
                <div className="col-12 mb-3">
                    <label htmlFor="username">Name</label>
                    <input type="text" className="form-control" placeholder="Name"></input>
                </div>
                <div className="col-12 mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" placeholder="Email"></input>
                </div>
                <div className="col-12 mb-3">
                    <label htmlFor="Contact">Contact Number</label>
                    <input type="number" className="form-control" placeholder="Contact Number"></input>
                </div>
                <div className="col-12 mb-3">
                    <label htmlFor="message">Message</label>
                   <textarea classNAme="form-control" placeholder="Your message"></textarea>
                </div>
                <div className="col-6 mt-2 offset-md-2 mb-2">
                <button className="btn btn-primary form-control">Send</button>
            </div>
            </form>
            </div>

       
        </>
    )
}

export default ContactForm
