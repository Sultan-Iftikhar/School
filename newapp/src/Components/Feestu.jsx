import React from 'react'
import Feesutbox from './Feesutbox';
import imageis from '../images/principle.jpg'
function Feestu() {
    return (
        <div className='product'>
        <div className='p-heading'>
            <h3>Principle Message</h3>
            <p><p>Our admissions process is built on nurturing relationships with prospective and applicant families. I encourage you to connect with me, view our virtual tour (below), or sign up to attend a Virtual Open House this fall. You will hear from admissions team members and our passionate group of leaders and educators while learning about the programs you are interested in. We thank you for your interest in Metropolitan Montessori and look forward to getting to know your family.<br /> Warmest regards<br/>Marielle LopezDirector of Enrollment</p></p>
        </div>
        <div className='product-container'>
            <Feesutbox img={imageis} />
        </div>
        </div>
    )
}

export default Feestu;
