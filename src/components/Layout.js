import {Outlet, Link} from "react-router-dom"
import Footer from "./Footer"
const Layout = () => {
    return (
        <>
            <nav>
                <ul className="navbar">
                    <li>
                        <Link to='/' target="_blank" rel="noopener noreferrer">Home</Link>
                    </li>
                    <li>
                        <Link to='/favorites' target="_blank" rel="noopener noreferrer">My Favorites</Link>
                    </li>
                    <li>
                        <Link to='/about' target="_blank" rel="noopener noreferrer">About Popcorn</Link>
                    </li> 
                </ul> 
            </nav>
            <Outlet />
            <Footer/>
        </>
    )
};

export default Layout;