import React, { useState } from 'react'
import { Redirect } from 'react-router'


function WelcomeNote(props) {
    const [redirect, setRedirect] = useState(false)
    
    const handleClick = () => {
        setRedirect(true)
    }

    const renderRedirect = () => {
        if(redirect) {
            return <Redirect to='./dashboard_profile' />
        }
    }

    return (
        <div className="welcome-note-div">
            {renderRedirect()}
            <div>
                <h1>WELCOME, <span style={{ color: "#DAA520" }}>{props.user.firstname}</span> {props.user.lastname}</h1>
                {props.user.Designation === "Student" ?
                    <p>
                        Leadership and learning are indispensable to each other. – John F. Kennedy
                    </p> :
                    <p>
                        The art of teaching is the art of assisting discovery. – Mark Van Doren
                    </p>
                }
            </div>
            <div className="welcome-note-view-profile-div">
                <div className="welcome-note-img-div">
                    <img src={props.user.profilePhotoUrl} alt={`${props.user.firstname} ${props.user.lastname}`} />
                </div>
                <div className="welcome-note-hover">
                    <div className="welcome-note-view-profile-button-div">
                        <button className="btn btn-sm btn-warning" onClick={handleClick}>View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeNote