import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts'

function Homecoursecard(props) {
  const [redirect, setRedirect] = useState(false)
  const isLoggedIn = props.isLoggedIn
  const courses = props.courses
  const courseId = props.cardObj.id

  const handleClick = (event) => {
    if(isLoggedIn) {
      const course = courses.filter((course) => course.id === courseId)
      props.getCourse(course[0])
      setRedirect(true)
    } else {
      ToastsStore.error("You have to be logged In to view the course")
    }
  }
  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="./dashboard_coursepage" />
    } 
  }
  return (
    <div className="home-course-card mx-5">
      {renderRedirect()}
      <ToastsContainer position={ToastsContainerPosition.TOP_LEFT} store={ToastsStore}/>
      <div className="home-course-img">
        <img src={props.cardObj.photoUrl} alt={props.cardObj.title} onClick={() => handleClick()}/>
      </div>
      <div className="home-course-title text-center">
        <p>{props.cardObj.title}</p>
      </div>
      <div className="home-course-description text-center">
        <p>{props.cardObj.description.slice(0, 100)}...</p>
      </div>
    </div>
  )
}

const matchStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    courses: state.courses,
  }
}
const matchDispatchToProps = (dispatch) => {
  return {
    getCourse: (course) => {
      dispatch({
        type: "FETCH_COURSE_PAGE",
        data: course,
      })
    },
  }
}
export default connect(matchStateToProps, matchDispatchToProps)(Homecoursecard);