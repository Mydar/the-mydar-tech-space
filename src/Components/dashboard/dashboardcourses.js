import React from 'react'
import Card from '../Courses/card'
import { Link } from 'react-router-dom'
import SavedIcon from '../../Images/saved-cart.png'
import SuccessfulUpload from '../../Images/checkmark-blue.png'
import {dashboard_courses} from '../Routing/links'

function Dashboardcourses(props) {
    const designation = props.user.Designation
    const userCourses = props.user.courses.map((courseId) => props.courses.find((course) => course.id === courseId))
    const courses = userCourses.map((course, index) => <Card key={index} cardObj={course} />)
    const noStudentCourse = <p className="no-course text-center p-3">There are no saved courses yet, check <Link to="/courses" >Courses</Link> to view available courses</p>
    const noTutorCourse = <p className="no-course text-center p-3">You have no course uploaded, check <Link to="/courseupload" >Here</Link> to upload new courses</p>
    const noCourse = designation === "Student" ? noStudentCourse : noTutorCourse

    return (
        <div>
            <div className="dashboard-headers pt-4">
                {designation === "Tutor" ?
                    <p>Your Uploads <img style={{ width: "25px", height: "25px" }} src={SuccessfulUpload} alt="user favorite programming courses" /></p>
                    :
                    <p>Saved Courses <img style={{ width: "25px", height: "25px" }} src={SavedIcon} alt="user favorite programming courses" /></p>
                }
                <div style={{ display: "flex" }}>
                    <Link to={dashboard_courses}><p style={{ color: "red" }}>See All</p></Link>
                    <div style={{ width: "50px" }}></div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="dashboard-dots"></div>
                        <div className="dashboard-dots"></div>
                        <div className="dashboard-dots"></div>
                    </div>
                </div>
            </div>
            <div className="cards-container">
                {props.user.courses.length === 0 ? noCourse : courses.slice(0, 2)}
            </div>
        </div>
    )
}

export default Dashboardcourses