import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Products from './Products'

const Offer = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="col-md-12 shadow-lg text-center mt-5 mb-3 p-3">
                    <h1>Today's Offers</h1>
                </div>
            </div>
            <Products />
            <Footer />
        </>
    )
}

export default Offer
