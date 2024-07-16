import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container-fluid'>
        <div className='heroimage'> 
            <img  className='image' src="hero.jpg"  alt="" />
        </div>
        <div className='nav'><nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">FRAME</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  style={{color:'aliceblue'}} className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="feature">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/price">Price</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/review">Review</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav></div>
        
    <div className='imagecontent'>
        <p>uicookies.com Creates High Quality Bootstrap Template<br></br> For Free</p>
        
        
    </div>
    <div className='imageb'>
    <button className='btn btn-primary'>Feature</button>
    <button className='btn btn-primary'>Get them Now</button>
    </div>
    </div>
  )
}

export default Header