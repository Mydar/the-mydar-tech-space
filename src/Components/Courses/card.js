import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts'

function Card(props) {
  const [redirect, setRedirect] = useState(false)
  const courseId = props.cardObj.id
  const isLoggedIn = props.isLoggedIn
  const user = props.user
  const courses = props.courses


  const handleClick = (event) => {
    if (isLoggedIn) {
      const course = courses.filter((course) => course.id === courseId)
      props.getCourse(course[0])
      setRedirect(true)
    } else {
      ToastsStore.error("You have to be logged In to view the course")
    }
  }

  const renderRedirect = () => {
    if (isLoggedIn && redirect) {
      return <Redirect to="./dashboard_coursepage" />
    }
  }
  let randomColor = require('randomcolor')
  let color = randomColor({
    luminosity: 'dark',
    hue: 'monochrome'
  })

  return (
    <div className="course-card-container m-5">
      {renderRedirect()}
      <ToastsContainer position={ToastsContainerPosition.TOP_LEFT} store={ToastsStore} />
      <div className="course-card">
        <div className="course-card-cover">
          <div className="course-card-img-div" style={{backgroundPosition: "center center", backgroundSize: "cover", backgroundImage: `url(${props.cardObj.photoUrl})`}}></div>
          <div className="course-card-title-div">
            <h1>{props.cardObj.title}</h1>
          </div>
        </div>
        <div className="course-card-hover text-center" style={{ backgroundColor: color }}>
          <div className="course-card-text-div px-3 py-2">
            <p className="pb-2" style={{borderBottom: "1px solid #EEE8AA", fontSize: "20px"}}>{props.cardObj.title}</p>
            <p>{props.cardObj.description.slice(0, 150)}...</p>
            <p>Course Duration: {props.cardObj.Hours}</p>
          </div>
          <div className="course-card-btn-div">
            <p className="pb-2" style={{color: "#EEE8AA", borderBottom: "1px solid #EEE8AA"}} onClick={() => handleClick()}> View complete course </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const matchStateToProps = (state) => {
  return {
    user: state.user,
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
export default connect(matchStateToProps, matchDispatchToProps)(Card);
