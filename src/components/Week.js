import React from 'react'

const Week=()=> {
    return (
        <>
             <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-3 mb-5">
          

            
        
        
       
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

export default Week
