import React from "react";
import '../Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
        <a href="#main" className="skip-to-main-content-link">Skip to main content</a> 
        <nav>   
            <ul>
                <div className="navbar">
                {/* <li><a href="#My Favorites" className="Favorites">My Favorites</a></li>
                <li><a href="#About Popcorn" className="About">About Popcorn</a></li> */}
                <link rel="shortcut icon" href="https://icons8.com/icons/set/favicon-film"></link>
<Link to='/Favorites'>My Favorites</Link>
                <Link to='/About'>About Popcorn</Link>
                </div>
            </ul>
        </nav>
    </>
    
    )

}





export default Navbar;