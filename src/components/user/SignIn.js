import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
const SignIn = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5 mb-6">
                <div className="col-md-6 offset-md-3 shadow-lg p-5">
                    <form>

                        <div className="col-12 mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" placeholder="Email"></input>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" placeholder="password"></input>
                        </div>
                        <div className="col-6 mt-2 offset-md-2 mb-2">
                            <button className="btn btn-primary form-control">Signin</button>
                        </div>
                    </form>
                </div>

            </div>
            
            <Footer/>
        </>
    )
}

export default SignIn
