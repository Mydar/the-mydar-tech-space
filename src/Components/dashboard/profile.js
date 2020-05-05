import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import Slideshow from '../Home/slides'
import Footer from '../Footer/footer'
import Dashnav from './dashnav'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'


function Userprofile(props) {
    const person = props.user
    const Qualifications = person.Qualifications
    const [ redirect, setRedirect ] = useState(false)
    
    const handleClick = () => {
        setRedirect(true)
    }
    const renderRedirect = () => {
        if (redirect) {
            return <Redirect to='/dashboard/editprofile' />
        }
    }
    
    
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <link rel="icon" href="./Favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="The student dashboard for the Mydar Tech Space Academy for software developers" />
                <title>The Mydar Tech Space | {person.firstname} {person.lastname}</title>
            </Helmet>
            <Slideshow />
            <div className="d-flex">
                <Dashnav />
                <div className="profile-wrapper">
                {renderRedirect()}
                <div>
                    <div className="d-flex flex-row-reverse mb-4">
                        <button className="btn btn-md btn-outline-danger" onClick={handleClick}>Edit Profile</button>
                    </div>
                    <div className="profilejpeg">
                        <img src={person.profilePhotoUrl} alt={`${person.firstname} ${person.lastname}`}/>
                    </div>
                    <h1 className="profileName">{person.firstname} {person.lastname}</h1>
                    <p className="profileBio">
                        <ul>
                            <li>Contact: {person.email}</li>
                            <li>Designation: {person.Designation}</li>
                            <li>Total Courses: {person.courses.length}</li>
                        </ul>
                    </p>
                    <p style={person.hasOwnProperty("Qualifications") ? {visibility: "visibility"} : {visibility: "hidden"}}>Qualification: {Qualifications} </p>
                    <p><strong>Review: </strong></p>
                    <div className="profileRev">
                        <p>
                            {person.Review}
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
        
    )
}

const matchStateToProps = (state) => ({user: state.user})

export default connect(matchStateToProps)(Userprofile)