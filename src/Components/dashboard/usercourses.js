import React from 'react'
import Card from '../Courses/card'
import Slideshow from '../Home/slides'
import Footer from '../Footer/footer'
import Dashnav from './dashnav'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function Usercourses(props) {
    const designation = props.user.Designation
    const userCourses = props.user.courses.map((courseId) => props.courses.find((course) => course.id === courseId))
    const courses = userCourses.map((course, index) => <Card key={index} cardObj={course} />)
    const noStudentCourse = <p>There are no saved courses yet, check <Link to="/courses" >Courses</Link> to view available courses</p>
    const noTutorCourse = <p>You have no course uploaded, check <Link to="/courseupload" >Here</Link> to upload new courses</p>
    const noCourse = designation === "Student" ? noStudentCourse : noTutorCourse

    return(
        <div>
            <Slideshow />
            <div className="d-flex">
                <Dashnav />
                <div className="cards-container">
                    {props.user.courses.length === 0 ? noCourse : courses}
                </div>
            </div>
            <Footer />
        </div>
    )
}

const matchStateToProps = (state) => ({
    user: state.user,
    courses: state.courses
})

export default connect(matchStateToProps)(Usercourses)