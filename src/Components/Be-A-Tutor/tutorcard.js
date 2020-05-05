import React from 'react'

function Tutorcard(props) {
    return (
        <div className="tutorcard">
            <div className="img-div">
                <img src={props.cardObj.profilePhotoUrl} alt={`${props.cardObj.firstname} ${props.cardObj.lastname}`} />
            </div>
            <div className="img-description">
                <p><strong>{props.cardObj.firstname} {props.cardObj.lastname}</strong><br />
                {props.cardObj.Qualifications}<br />
                </p>
            </div>
        </div>
    )
}


export default Tutorcard