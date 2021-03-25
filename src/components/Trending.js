import React from 'react'
import Slider from "react-slick";


const Trending = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="container">
                <div className="row mt-3 mb-8">
                    <Slider {...settings}>
                        <div>
                        <img className="img-fluid" src="images/t1.jpg" alt="" style={{height:'200px'}}></img>
                        </div>
                        <div>
                        <img className="img-fluid" src="images/t2.jpg" alt="" style={{height:'200px'}}></img>
                        </div>
                        <div>
                        <img className="img-fluid" src="images/t3.jpg" alt="" style={{height:'200px'}}></img>
                        </div>
                        <div>
                        <img className="img-fluid" src="images/t4.jpg" alt="" style={{height:'200px'}}></img>
                        </div>
                        <div>
                        <img  className="img-fluid" src="images/t5.jpg" alt="" style={{height:'200px'}}></img>
                        </div>
                        <div>
                        <img  className="img-fluid" src="images/t6.jpg" alt="" style={{height:'200px'}}></img>
                        </div>
                        <div>
                        <img  className="img-fluid" src="images/t7.jpg" alt="" style={{height:'200px'}}></img>
                        </div>
                        <div>
                        <img  className="img-fluid" src="images/t8.jpg" alt="" style={{height:'200px'}}></img>
                        </div>
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Trending
