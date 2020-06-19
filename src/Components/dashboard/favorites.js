import React from 'react'
import Card from '../Courses/card'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import WelcomeNote from './welcomenote'
import Footer from '../Footer/footer'
import FavoritesIcon from '../../Images/favorite-icon.png'

function Usercourses(props) {
  const userFavoriteCourses = props.user.favorites.map((courseId) => props.courses.find((course) => course.id === courseId))
  const favorites = userFavoriteCourses.map((course, index) => <Card key={index} cardObj={course} />)
  const noFavoriteCourse = <p className="no-course text-center p-3">There are no favorite courses yet, check <Link to="/courses" >Courses</Link> to view available courses</p>

  return (
    <div>
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
          <p>Favorite Courses <img style={{ width: "25px", height: "25px" }} src={FavoritesIcon} alt="user favorite programming courses" /></p>
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
          {props.user.favorites.length === 0 ? noFavoriteCourse : favorites}
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
export default connect(mapStateToProps)(Usercourses)