import React, {useState} from 'react'
import Card from '../Courses/card'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import WelcomeNote from './welcomenote'
import Footer from '../Footer/footer'
import SavedIcon from '../../Images/saved-cart.png'
import SuccessfulUpload from '../../Images/checkmark-blue.png'

function Usercourses(props) {
    const designation = props.user.Designation
    const userCourses = props.user.courses.map((courseId) => props.courses.find((course) => course.id === courseId))
    const courses = userCourses.map((course, index) => <Card key={index} cardObj={course} />)
    const noStudentCourse = <p className="no-course text-center p-3">There are no saved courses yet, check <Link to="/courses" >Courses</Link> to view available courses</p>
    const noTutorCourse = <p className="no-course text-center p-3">You have no course uploaded, check <Link to="/courseupload" >Here</Link> to upload new courses</p>
    const noCourse = designation === "Student" ? noStudentCourse : noTutorCourse
    const [redirect, setRedirect] = useState(false);

    const handleClick = () => {
        setRedirect(true)
    }

    const renderRedirect = () => {
        if (redirect) {
          return <Redirect to="./courseupload" />
        }
      }

    return (
        <div>
            {renderRedirect()}
            <Helmet>
                <meta charset="UTF-8" />
                <link rel="icon" href="./Favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="The student dashboard for the Mydar Tech Space Academy for software developers" />
                <title>The Mydar Tech Space | Dashboard Courses</title>
            </Helmet>
            <WelcomeNote user={props.user} />
            <div>
                <div className="dashboard-headers pt-4">
                    {designation === "Tutor" ?
                        <p>Your Uploads <img style={{ width: "25px", height: "25px" }} src={SuccessfulUpload} alt="user's uploaded programming courses" /></p>
                        :
                        <p>Saved Courses <img style={{ width: "25px", height: "25px" }} src={SavedIcon} alt="user saved programming courses" /></p>
                    }
                    <div style={{ display: "flex" }}>
                        <Link to="/dashboard" ><p style={{ color: "red" }}>Go back</p></Link>
                        <div style={{ width: "50px" }}></div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div className="dashboard-dots"></div>
                            <div className="dashboard-dots"></div>
                            <div className="dashboard-dots"></div>
                        </div>
                    </div>
                </div>
                <div className="cards-container">
                    {props.user.courses.length === 0 ? noCourse : courses}
                </div>
                {designation === "Tutor" ?
                        <div className="upload-button-div"><button className="btn btn-lg btn-primary" onClick={handleClick}>Upload Course</button></div>
                        :
                        <div></div>
                    }
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
      courses: state.courses
    }
  }
export default connect(mapStateToProps)(Usercourses)