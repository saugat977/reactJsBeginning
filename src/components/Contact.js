import React from 'react'
import ContactForm from './ContactForm'
import Footer from './Footer'
import Navbar from './Navbar'
import Map from './Map'

const Contact=()=> {
    return (
        <>
         <Navbar/>
         <div className="container mt-5 mb-3">
             <div className="row">
             <ContactForm/>
             <Map/>
         </div>
         </div>
         <Footer/>   
        </>
    )
}

export default Contact
