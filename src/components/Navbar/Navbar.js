import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="Navbar">
      <div className="navbar-pages">
                <div class="nav-logo">
                    {/* <i class="fa-solid fa-bars"></i> */}
                    <div class="btn-group dropdoown Dep">
          <button
            type="button"
            class="btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
           
          >
            All CATEGORIES
          </button>
          <ul class="dropdown-menu lists ">
            <li className="dep-item"><a class="dropdown-item" href="#">Computers</a></li>
            <li className="dep-item"><a class="dropdown-item" href="#">Laptops </a></li>
            <li className="dep-item">
              <a class="dropdown-item" href="#">Cameras</a>
            </li>
            <li className="dep-item"><a class="dropdown-item" href="#">Hardware</a></li>
            <li ><a class="dropdown-item" href="#">Smartphones</a></li>
          </ul>
                    </div>
                </div>
                <div className="Pages">
                    <ul>
                        <li className="selected">Home <i class="fas fa-angle-down"></i></li>
                        <li>Shop <i class="fas fa-angle-down"></i></li>
                        <li>New Arrival</li>
                        <li>Best Seller</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li onClick={()=>{window.location.href="/adminpage"}}>Controller</li>
                    </ul>
                </div>
                <div className="disc">
                    <img  src="" alt=""/>
                    <div>
                        <h5>Only This Weekend</h5>
                        <p>Super Discount</p> 
                    </div>
                    
                </div>
            </div>
      </div>
    </>
  );
}
export default Navbar;
