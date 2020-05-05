import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";

function Card(props) {
  const [redirect, setRedirect] = useState(false)
  const courseId = props.cardObj.id
  const isLoggedIn = props.isLoggedIn
  const user = props.user
  const userID = user.id
  const courses = props.courses
  const filteredCourses = user.hasOwnProperty("favorites") ? user.favorites.filter((id) => +courseId === +id) : null
  
  const handleClick = (event) => {
    if(isLoggedIn) {
      const course = courses.filter((course) => course.id === courseId)
      props.getCourse(course[0])
      setRedirect(true)
    } else {
      alert("You have to be logged In to view the course")
    }
  }

  const renderRedirect = () => {
    if (isLoggedIn && redirect) {
      return <Redirect to="/dashboard/coursepage" />
    } 
  }

  const addFave = () => {
    if (isLoggedIn) {
      if (filteredCourses.length === 0) {
        user.favorites.push(courseId);
        Axios.put(`https://myjsondb.herokuapp.com/Students/${userID}`, {
          ...user,
        })
      } else {
          alert("Course already exists as favorite")
      }
    } else {
      alert("You have to be logged In to add course to favorites")
    }
  }

  const removeFave = () => {
    if (isLoggedIn) {
      if (filteredCourses.length !== 0) {
        const newcourses = user.favorites.filter((userfavorite) => userfavorite !== courseId)
        user.favorites = newcourses
        Axios.put(`https://myjsondb.herokuapp.com/Students/${userID}`, {
          ...user,
        })
      }
    } else {
      alert("You have to be logged In to remove course from favorite")
    }
  }

  return (
    <div className="card">
      {renderRedirect()}
      <div className="img-div">
        <img src={props.cardObj.photoUrl} alt={props.cardObj.title} />
      </div>
      <div className="img-description">
        <p>
          <strong>{props.cardObj.title}</strong>
          <br />
          <strong>Hours of Coursework: </strong>{props.cardObj.Hours} 
          <br />
          <strong>Rating:</strong> {props.cardObj.Rating} Stars
        </p>
      </div>
      <div>
        <button className="btn btn-outline-warning mb-sm-2" type="button" onClick={handleClick}> View Course </button>
      </div>
      {filteredCourses === null ? <div></div> : 
        <div >
        {filteredCourses.length === 0 && filteredCourses !== null ? 
          <button className="btn btn-warning mb-sm-2" type="button" onClick={addFave}>Add to favorites</button> :
          <button className="btn btn-warning mb-sm-2" type="button" onClick={removeFave}>Remove favorite</button>
        }
        </div>
      }
      
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
