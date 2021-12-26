import React from "react";

const Navbar= () =>{
    return(
        <div>
            <nav>
                <a href="#" alt="Logo">
                    <h2><span>Best</span>Edu<span>System</span></h2>
                </a>

        <ul className='manu'>
            <li><a href='Home' className='active'>Home</a></li>
            <li><a href='About'>About</a></li>
            <li><a href='Campuses'>Campuses</a></li>
            <li><a href='Contact'>Contact</a></li>
        </ul>
            </nav>
        </div>
    )
}
export default Navbar;