import React, { useState } from 'react'
import Footer from '../Footer/footer'
import { connect } from 'react-redux'
import StarRatingComponent from 'react-star-rating-component';
import Axios from 'axios'
import { Helmet } from 'react-helmet'
import './coursepage.css'
import RelatedCourses from './relatedcourses.';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts'

function Coursepage(props) {
  const isLoggedIn = props.isLoggedIn
  const course = props.course
  const user = props.user
  const userID = user.id
  const [rating, setRating] = useState(0)
  const filteredCourses = user.courses.filter((id) => +course.id === +id);
  const filteredFaveCourses = user.hasOwnProperty("favorites") ? user.favorites.filter((id) => +course.id === +id) : null
  const handleSave = () => {
    if (isLoggedIn) {
      if (filteredCourses.length === 0) {
        user.courses.push(course.id);
        Axios.put(`https://myjsondb.herokuapp.com/Students/${userID}`, {
          ...user,
        })
        .then((res) => {
          props.updateUser(user)
          ToastsStore.success("You have sucessfully saved this course")
        })
      } else {
        ToastsStore.error("Course already exists as saved course");
      }
    } else {
      ToastsStore.error("You have to be logged In to add course");
    }
  }

  const handleRemove = () => {
    if (isLoggedIn) {
      if (filteredCourses.length !== 0) {
        const newcourses = user.courses.filter((usercourse) => usercourse !== course.id)
        user.courses = newcourses
        Axios.put(`https://myjsondb.herokuapp.com/Students/${userID}`, {
          ...user,
        })
        .then((res) => {
          props.updateUser(user)
          ToastsStore.success("You have sucessfully removed this course from saved courses")
        })
      }
    } else {
      ToastsStore.error("You have to be logged In to remove this course")
    }
  }

  const onStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue)
    course.Rating = nextValue
    Axios.put(`https://myjsondb.herokuapp.com/Courses/${course.id}`, {
      ...course,
    })
  }
  const addFave = () => {
    if (isLoggedIn) {
      if (filteredFaveCourses.length === 0) {
        user.favorites.push(course.id);
        Axios.put(`https://myjsondb.herokuapp.com/Students/${userID}`, {
          ...user,
        })
        .then((res) => {
          props.updateUser(user)
          ToastsStore.success("You have sucessfully added this course to favorites")
        })
      } else {
        ToastsStore.error("Course already exists as favorite")
      }
    } else {
      ToastsStore.error("You have to be logged In to add course to favorites")
    }
  }

  const removeFave = () => {
    if (isLoggedIn) {
      if (filteredFaveCourses.length !== 0) {
        const newcourses = user.favorites.filter((userfavorite) => userfavorite !== course.id)
        user.favorites = newcourses
        Axios.put(`https://myjsondb.herokuapp.com/Students/${userID}`, {
          ...user,
        })
        .then((res) => {
          props.updateUser(user)
          ToastsStore.success("You have sucessfully removed this course from favorites")
        })
      }
    } else {
      ToastsStore.error("You have to be logged In to remove course from favorite")
    }
  }


  return (
    <div>
      <ToastsContainer position={ToastsContainerPosition.TOP_LEFT} store={ToastsStore} />
      <Helmet>
        <meta charset="UTF-8" />
        <link rel="icon" href="./Favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="The course page for software development for the Mydar Tech Space Academy for software developers" />
        <title>The Mydar Tech Space |{course.title}</title>
      </Helmet>
      <div className="coursepage-intro-div px-2" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${course.photoUrl})` }}>
        <h1>{course.title.toUpperCase()}</h1>
      </div>
      <div className="course-content px-2 py-3">
        <div>
          <div>
            <p style={{ color: "#DAA520", fontSize: "25px" }}>{course.title}</p>
            <p>{course.description}</p>
          </div>
          <div className="coursevid my-5">
            <iframe
              src={course.videoUrl}
              title={course.title}
              width="100%"
              height="100%"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowfullscreen
              frameborder="0"
            ></iframe>
          </div>
          <div className="">
            <div className="">
              <div className="coursepage-description py-3 px-2">
                Track: {course.Track} | Hours of coursework: {course.Hours} | Rating: <StarRatingComponent
                  name="courseRating"
                  starCount={5}
                  starSize="30px"
                  starSpacing="15px"
                  value={rating}
                  onStarClick={onStarClick}
                />
              </div>
              <div className="coursepage-buttons py-3 px-2" style={user.Designation === "Student" ? { visibility: "visible" } : { visibility: "hidden" }}>
                <div>
                  {filteredCourses.length === 0 ?
                    <button className="btn btn-md btn-outline-danger" onClick={handleSave}>Save Course</button> :
                    <button className="btn btn-md btn-outline-danger" onClick={handleRemove}>Remove Course</button>
                  }
                </div>
                <div>
                  {filteredFaveCourses === null ? <div></div> :
                    <div >
                      {filteredFaveCourses.length === 0 && filteredFaveCourses !== null ?
                        <button className="btn btn-warning mb-sm-2" type="button" onClick={addFave}>Add to favorites</button> :
                        <button className="btn btn-warning mb-sm-2" type="button" onClick={removeFave}>Remove favorite</button>
                      }
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="related-courses-div">
        <p style={{fontSize: "25px"}}>Courses you might be interested in</p>
        <div className="divider"></div>
        <RelatedCourses />
      </div>
      <Footer />
    </div>
  )
}
const matchStateToProps = (state) => {
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    course: state.coursepage
  }
}
const matchDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => {
            dispatch({
                type: "UPDATE_USER_INFO",
                data: user
            })
        }
    }
}

export default connect(matchStateToProps,matchDispatchToProps)(Coursepage)