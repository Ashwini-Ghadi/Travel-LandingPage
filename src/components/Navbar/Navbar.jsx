import React from 'react'
import './Navbar.css'


function Navbar() {
    return (
       <>
       <nav className="navbar navbar-expand-sm bg-transparent m-2" >
  <div className="container-fluid "  >
    <a className="navbar-brand text-white" href="#" style={{fontSize:"35px"}}>Journey Map</a>
    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{gap:"80px"}}>
        <li className="nav-item">
          <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white active" href="#">Explore</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white active" href="#">About</a>
        </li>
        <li className="nav-item">
            <button style={{border:'none', borderRadius:"15px"}}> <a className="nav-link active pl-pr-2"  href="#">Contact</a></button>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
       </> 
    )
}

export default Navbar
