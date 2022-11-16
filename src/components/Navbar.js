import React from "react";
import '../Navbar.css';

const Navbar = () => {

    return (
        <>
        <a href="#main" class="skip-to-main-content-link">Skip to main content</a> 
        
    <div class="topnav">
         <a href="#home">Home</a>
         <a href="favorites">My Favorites</a>
         <a href="#eighties">80s Movies</a>
         <a href="#nineties">90s Movies</a>
         <a href="#about">About Popcorn</a>
         
    </div>
    </>
    )

}





export default Navbar;