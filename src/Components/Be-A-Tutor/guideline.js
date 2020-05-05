import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import {signup_form} from '../Routing/links'


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
                <h3 className="text-center">Join Millions of Tutors across the world to Make A Difference!</h3>
                <div className="guide-box">
                    <div className="guides-container">
                        <div className="stepbystep">
                            <p><span className="Numbers">1</span></p>
                            <p>Sign up to be a Tutor</p>
                            <div>
                                <button className="btn btn-outline-warning mr-sm-2" type="submit" onClick={handleClick}>Sign-Up</button>
                            </div>
                        </div>
                        <div className="stepbystep">
                            <p><span className="Numbers">2</span></p>
                            <p>Record Tutorial Videos, Ensure that the video is in the formats: 3GPP, AVI, FLV, MOV, MPEG4, MPEGPS, WebM and WMV. MPEG4, Ensure increased Volume and maximum picture quality</p>
                        </div>
                        <div className="stepbystep">
                            <p><span className="Numbers">3</span></p>
                            <p>Upload Videos from your device. Ensure you upload the cover image for the course, fill in the description box and include the course title and estimated hours of coursework.</p>
                        </div>
                        <div className="stepbystep">
                            <p><span className="Numbers">4</span></p>
                            <p>Check that all the fields are filled with the right information and Upload the course.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guidelines