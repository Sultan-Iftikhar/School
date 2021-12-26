import React from "react";
import Aboutimg from '../images/about.jpg'
const About=()=>{
    return(
        <div className='about'>
            <div className='about-model'>
                <img src={Aboutimg} />
            </div>
            <div className='about-text'>
                <h1>We Are The Best<br />Schools Ever</h1>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
                <button>View More Details</button>
            </div>
        </div>
    )
}
export default About;