import React from 'react'
import Hodbox from './Hodbox';
import img1 from '../images/s1.png'
import img2 from '../images/s2.png'
import img3 from '../images/s3.png'
function Hod() {
    return (
        <div className='agent'>
            <div className='a-heading'>
                <h1>Head Of Departments</h1>
                <p>Lorem ipsum is a placeholder text commonly used to demonstrate</p>
            </div>
            <div className='b-container'>
                <Hodbox img={img1} name='Mr. Sultan' />
                <Hodbox img={img2} name='Mr. Saif' />
                <Hodbox img={img3} name='Mis Taiba' />
            </div>
        </div>
    )
}

export default Hod;
