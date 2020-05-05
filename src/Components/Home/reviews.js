import React from 'react'

function Reviews(props) {
    return(
        <div className="rev-card">
            <div>
                <p>{props.rev.Review}</p>
            </div>
            <div className="signature">
                <p>-{props.rev.firstname} {props.rev.lastname}</p>
                <p>{props.rev.Designation}</p>
            </div>
        </div>
    )
}

export default Reviews