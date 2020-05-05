import React, {useState} from 'react'
import Slideshow from '../Home/slides'
import Footer from '../Footer/footer'
import {connect} from 'react-redux'
import StarRatingComponent from 'react-star-rating-component';
import Axios from 'axios'
import {Helmet} from 'react-helmet'

function Coursepage(props) {
    const isLoggedIn = props.isLoggedIn
    const course = props.course
    const user = props.user
    const userID = user.id
    const [rating, setRating] = useState(0)
    const filteredCourses = user.courses.filter((id) => +course.id === +id);
    const handleSave = () => {
        if (isLoggedIn) {
            if (filteredCourses.length === 0) {
              user.courses.push(course.id);
              Axios.put(`https://myjsondb.herokuapp.com/Students/${userID}`, {
                ...user,
              })
            } else {
                alert("Course already exists as saved course");
            }
          } else {
            alert("You have to be logged In to add course");
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
          }
        } else {
          alert("You have to be logged In to remove this course")
        }
  }

    const onStarClick = (nextValue, prevValue, name) => {
        setRating(nextValue)
        course.Rating = nextValue
        Axios.put(`https://myjsondb.herokuapp.com/Courses/${course.id}`, {
                ...course,
              })
    }

    return (
            <div>
              <Helmet>
                <meta charset="UTF-8" />
                <link rel="icon" href="./Favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="The course page for software development for the Mydar Tech Space Academy for software developers" />
                <title>The Mydar Tech Space |{course.title}</title>
              </Helmet>
                <Slideshow />
                <h1 className="courseheading my-4 text-center">{course.title}</h1>
                <div className="coursevid my-4">
                <iframe
                    src={course.videoUrl}
                    title={course.title}
                    width="640"
                    height="400"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowfullscreen
                    frameborder="0"
                ></iframe>
                </div>
                <div className="course-page my-4">
                    <div className="course-info">
                    <p>
                        Track: {course.Track} | 
                        Hours of coursework: {course.Hours} | 
                        Rating: <StarRatingComponent 
                            name="courseRating" 
                            starCount={5}
                            starSize="30px"
                            starSpacing="15px"
                            value={rating}
                            onStarClick={onStarClick}
                        />
                        <span style={user.Designation === "Student" ? {visibility: "visible"} : {visibility: "hidden"}}>
                          {filteredCourses.length === 0 ? 
                          <button className="btn btn-md btn-outline-danger float-sm-right" onClick={handleSave}>Save Course</button> :
                          <button className="btn btn-md btn-outline-danger float-sm-right" onClick={handleRemove}>Remove Course</button>
                          }
                        </span>
                        
                    </p>
                    </div>
                    <div>
                    <p>About this course: </p>
                    <p>{course.description}</p>
                    </div>
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

export default connect(matchStateToProps)(Coursepage)