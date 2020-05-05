import React from 'react';
import Slideshow from '../Home/slides'
import Dashnav from '../dashboard/dashnav'
import Footer from '../Footer/footer'
import Card from '../Courses/card'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'

function Dashboard(props) {
  const userCourses = props.user.courses.map((courseId) => props.courses.find((course) => course.id === courseId))
  const courses = userCourses.map((course, index) => <Card key={index} cardObj={course} />)
  const noCourse = <p>There are no saved courses yet, check <Link to="/courses" >Courses</Link> to view available courses</p>

  return(
      <div>
        <Helmet>
          <meta charset="UTF-8" />
          <link rel="icon" href="./Favicon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="The student dashboard for the Mydar Tech Space Academy for software developers" />
          <title>The Mydar Tech Space | Dashboard</title>
        </Helmet>
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
    courses: state.courses
  }
}

export default connect(mapStateToProps)(Dashboard)