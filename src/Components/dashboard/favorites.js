import React from "react";
import Card from "../Courses/card";
import Slideshow from "../Home/slides";
import Dashnav from "./dashnav";
import Footer from "../Footer/footer";
import { connect } from "react-redux";
import Tutorsnav from "./tutorsnav";
import {Link} from 'react-router-dom'

function Favorites(props) {
  const user = props.user
  const designation = user.Designation
  const allCourses = props.courses
  const userFavoriteCourses = user.favorites.map((favoriteCourseId) => allCourses.find((course) => course.id === favoriteCourseId))
  
  const cardComp = userFavoriteCourses.map((favorite) => (<Card cardObj={favorite} />))
  const noCourse = <p>You have no favorite courses yet, check <Link to="/courses" >Courses</Link> to view courses to add</p>

  return (
    <div>
      <Slideshow />
      <div className="d-flex">
        {designation === "Student" ? <Dashnav /> : <Tutorsnav />}
        <div className="cards-container">{userFavoriteCourses.length === 0 ? noCourse : cardComp}</div>
      </div>
      <Footer />
    </div>
  );
}
const matchStateToProps = (state) => ({
  user: state.user,
  courses: state.courses,
});

export default connect(matchStateToProps)(Favorites);
