import React from 'react'
import './Hover.css';

const Products = () => {
  return (
    <>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5 mb-5">
          <div className="col">
            <div className="card shadow-lg">
              <img src="images/ipad.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">iPad</h5>
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg">
              <img src="images/lenovo.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Lenovo</h5>
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg">
              <img src="images/unsplash.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Unsplash</h5>
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg">
              <img src="images/lcd.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">LCD Monitor</h5>
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg">
              <img src="images/dell.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Dell</h5>
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg">
              <img src="images/mac.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Macbook</h5>
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg">
              <img src="images/acer.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Acer</h5>
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg">
              <img src="images/razor.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Razor</h5>
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Products
