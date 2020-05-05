import React from 'react'

function Coursenav() {
    return (
        <div className="course-nav">
            <div className="course-nav-btn">
                <button type="button" className="btn btn-outline-primary btn-nav">FrontEnd Development</button>
            </div>
            <div className="course-nav-btn">
                <button type="button" className="btn btn-outline-primary btn-nav">BackEnd Development</button>
            </div>
            <div className="course-nav-btn">
                <button type="button" className="btn btn-outline-primary btn-nav">Mobile Development</button>
            </div>
            <div className="course-nav-btn">
                <button type="button" className="btn btn-outline-primary btn-nav">Devops Engineering</button>
            </div>
        </div>
    )
}

export default Coursenav