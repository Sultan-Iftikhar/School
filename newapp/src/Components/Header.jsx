import React from "react";
import Navbar from "./Navbar";
const Header= () =>{
    return(
        <>
        <div className='header'>
        <Navbar />
        <div className='intro'>
            <p>Looking For The Best Education !</p>
            <h1>Best<span> Education </span>System</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
            <a href='#' className='header-btn'>Details</a>
        </div>
        </div>
        <div className="white">
            
        </div>
        </>
    )
}
export default Header;