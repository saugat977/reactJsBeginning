import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="container-fixed ">
        <div className="row align-items-center bg-dark pt-3 pb-3" style={{ backgroundColor: '#232f3e' }}>
          <div className="col-md-8">
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
            <div className="col-md-4">
              <ul className="d-flex">
                <li className="list-unstyled"><Link className="text-decoration-none p-3 text-white" to="/signup"><i class="bi bi-person-plus-fill" style={{ color: 'orange', fontSize: '20px' }}></i>&nbsp;Signup</Link></li>
                <li className="list-unstyled"><Link className="text-decoration-none p-3 text-white" to="/signin"><i class="bi bi-box-arrow-in-right" style={{ color: 'orange', fontSize: '20px' }}></i>&nbsp;Signin</Link></li>
                <li className="list-unstyled"><Link className="text-decoration-none p-2 text-white"><i class="bi bi-cart" style={{ color: 'orange', fontSize: '20px' }}></i><sup style={{ fontSize: '10px', backgroundColor: 'red', borderRadius: '50%', padding: '2px', color: 'white' }}>5</sup></Link></li>
              </ul>
            </div>

          

        </div>

        <nav class="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: '#232f3e' }}>
          <div class="container-fluid">
            <Link className="navbar-brand text-white" to="/" style={{ color: 'white' }}>E-Commerce</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page" to="/" style={{ color: 'white' }}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/offer" style={{ color: 'white' }}>Offers</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/deals" style={{ color: 'white' }}>Deals</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact" style={{ color: 'white' }}>Contact</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
                    Dropdown
          </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link class="dropdown-item" to="#">Action</Link></li>
                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                  </ul>
                </li>

              </ul>

            </div>
          </div>

        </nav>
      </div>
    </>
  )
}

export default Navbar
