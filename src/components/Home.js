import React from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Navbar from './Navbar'
import Products from './Products'
import Trending from './Trending'

const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <Products />
            <Trending/>
            <Footer />
        </>
    )
}

export default Home
