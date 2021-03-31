import React from 'react'

const Day=()=> {
    return (
        <>
          
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-3 mb-5">
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
                <h5 className="card-title">MSI</h5>
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
          
          
        </div>
      </div>
        </>
    )
}

export default Day