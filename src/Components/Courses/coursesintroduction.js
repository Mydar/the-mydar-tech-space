import React from 'react'
import './courses.css'
import CoursesIntroductionImage from '../../Images/coursesintroduction.png'

function CoursesIntroduction() {
    return (
        <div className="courses-introduction-div">
            <div className="courses-introduction p-3">
                <div className="courses-introduction-img">
                    <img src={CoursesIntroductionImage} alt="programming courses for all tech enthusiasts" />
                </div>
                <div className="courses-introduction-text py-4">
                    <div>
                        <h1>Improve your <span style={{ color: "	#DAA520" }}>Programming</span> skills,<br />
                            <span style={{ color: "	#DAA520" }}>Learn</span> from our highly experienced <span style={{ color: "	#DAA520" }}>Tutors</span>.</h1>
                        <div className="courses-introduction-box"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesIntroduction