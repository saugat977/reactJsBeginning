import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Link} from 'react-router-dom'
const Deals = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">

                <div className="row mt-3">
                    <h2>Deals and promotion</h2>
                    <span>Shop Today's Deals,Lightning Deals, and limited time discounts</span>
                    <div className="col-md-2 p-3 shadow" style={{backgroundColor:'#f5f5f5'}}>
                        <h4>Catogories</h4>
                        <form>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Mobile Phones
  </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                   Laptops
  </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                   Headphones
  </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                   Gadgets
  </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                   Cameras
  </label>
                            </div>
                            <Link className="text-decoration-non btn btn-info">See more</Link>
                        </form>
                        <div className="mt-2">
                            <h6>Deal type</h6>
                            <Link to="#" ClassName="text-decoration-none">Deal of the day</Link><br/>
                            <Link to="#" ClassName="text-decoration-none">Lightning deals</Link><br/>
                            <Link to="#" ClassName="text-decoration-none">Saving and sales</Link><br/>
                            <Link to="#" ClassName="text-decoration-none">Weekend deals</Link><br/>
                        </div>
                    </div>
                    <div className="col-md-8">

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Deals
