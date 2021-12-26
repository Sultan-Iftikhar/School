import React from "react";
import imgis1 from '../images/okara.jpg'

const Howitworks=()=>{
    return(
        <div className='how-it-works'>
            <div className='container'>
                <h2>Our Campus</h2>
                <div className='flex'>
                    <div>
                        <img src={imgis1}/>
                            <h4>Okara Campus</h4>
                            <p>Lorem ipsum is a placeholder text commonly used to demonstrate</p>
                    </div>
                    <div>
                        <img src={imgis1}/>
                            <h4>Sahiwal Campus</h4>
                            <p>Lorem ipsum is a placeholder text commonly used to demonstrate</p>
                    </div>
                    <div>
                        <img src={imgis1}/>
                            <h4>Lahore Campus</h4>
                            <p>Lorem ipsum is a placeholder text commonly used to demonstrate</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Howitworks;