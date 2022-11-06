import React from "react";
import '../Footer.css';



const Footer = () =>{

    return(
        <>
        <div className="main-footer">
            <div className="container">
                <div className='row'>
                    {/* Column1 */}
                    <div className='col'>
                        <ul className='list-unstyled'>
                            <li>1640 Riverside Drive</li>
                            <li>Hill Valley, United States</li>
                            <li>001 555-2368</li>
                        </ul>
                    </div>
                    
                    <div className="row">
                        <p className='col-sm'>
                            &copy;{new Date().getFullYear()} Popcorn please | All rights reserved | Created by Annika Neumann</p>
                    </div>
                </div>
                
            </div>
        </div>
        </>
      )
    }


export default Footer;
