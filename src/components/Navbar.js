import React from "react";
import '../Navbar.css';

const Navbar = () => {

    return (
        <>
        <a href="#main" className="skip-to-main-content-link">Skip to main content</a> 
        
    <div className="topnav">
    
     {/* <a href="#home">Home</a> */}
     {/* <FontAwesomeIcon icon="fa-light fa-popcorn" /> */}
     <a href="#favorites">My Favorites</a>
      
        <a href="#about">About Popcorn</a> 
    </div>
    </>
    
    )

}





export default Navbar;