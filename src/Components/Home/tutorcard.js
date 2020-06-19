import React from 'react'

function Tutorcard({Image, Name, qualifications}) {
    return (
        <div className="pb-3">
            <div className="tutor-img-div">
                <img src={Image} alt={Name} />
            </div>
            <div className="tutor-img-description text-center">
                <p style={{color: "white", fontWeight: "bolder", fontSize: "20px"}}>{Name}</p>
                <p style={{color: "#DAA520", fontWeight: "bolder", fontSize: "17px"}}>{qualifications}</p>
            </div>
        </div>
    )
}


export default Tutorcard