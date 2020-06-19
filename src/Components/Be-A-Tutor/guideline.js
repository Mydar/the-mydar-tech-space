import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import {signup_form} from '../Routing/links'
import SignupButton from '../../Images/sign-up.png'
import Videorecorder from '../../Images/camera-recorder-upload-video.png'
import Uploadvideo from '../../Images/upload_video_content.png'
import Submitcheck from '../../Images/checkmark-blue.png'


function Guidelines() {
    const [ redirect, setRedirect ] = useState(false)
    
    const handleClick = () => {
        setRedirect(true)
    }
    const renderRedirect = () => {
        if (redirect) {
            return <Redirect to={signup_form} />
        }
    }
    return(
        <div>
            {renderRedirect()}
            <hr />
            <div className="guide-description">
                <h2 className="text-center">Join Millions of Tutors across the world to Make A Difference!</h2>
                <div className="guide-box">
                    <div className="guides-container text-center px-3">
                        <div className="stepbystep px-3 py-2">
                            <div className="step-diagram"><img src={SignupButton} alt="sign up to be a tutor" /></div>
                            <p>Sign up to be a Tutor</p>
                            <div>
                                <button className="btn btn-outline-warning mr-sm-2" type="submit" onClick={handleClick}>Sign-Up</button>
                            </div>
                        </div>
                        <div className="stepbystep">
                            <div className="step-diagram"><img src={Videorecorder} alt="record tutorial videos for the mydar tech space platform" /></div>
                            <p>Record Tutorial Videos, Ensure that the video is in the formats: 3GPP, AVI, FLV, MOV, MPEG4, MPEGPS, WebM and WMV. MPEG4, Ensure increased Volume and maximum picture quality</p>
                        </div>
                        <div className="stepbystep">
                            <div className="step-diagram"><img src={Uploadvideo} alt="upload videos to the mydar tech space platform" /></div>
                            <p>Upload Videos from your device. Ensure you upload the cover image for the course, fill in the description box and include the course title and estimated hours of coursework.</p>
                        </div>
                        <div className="stepbystep">
                            <div className="step-diagram"><img src={Submitcheck} alt="verify all course details and click on upload" /></div>
                            <p>Check that all the fields are filled with the right information and Upload the course.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guidelines