import React from 'react'
import { Link } from 'react-router-dom'
import Hometutorimage from '../../Images/hometutor.jpg'

function HomeTutor() {
    return (
        <div className="hometutor-div" style={{backgroundImage: `url(${Hometutorimage})`}}>
            <div className="hometutor-text-div">
                <div className="p-3">
                    <p className="hometutor-heading">BECOME A TUTOR</p>
                    <p className="hometutor-body">Reach out to millions of tech enthusiasts across the world through this platform and help make the world a better place through technology.</p>
                    <div className="hometutor-text-button-div">
                        <Link to='/be-a-tutor'><button className="btn btn-primary mb-sm-2" type="button"><span style={{fontSize: "20px"}}>Join Us Now</span></button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTutor