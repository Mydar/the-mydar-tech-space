import React, { useState, useEffect } from "react"
import axios from "axios"
import {connect} from 'react-redux'
import Homecoursecard from "./homecoursecard"

function Homecourses(props) {
  const [isLoading, setLoading] = useState(false)
  const [courses, setCourses] = useState([])
 
  const successHandler = (data) => {
    props.updatecourses(data)
    setCourses(data.slice(1,7))
    setLoading(false)
  }

  useEffect(() => {
      setLoading(true)
      const fetchData = async() => {
        const Response = await axios ("https://myjsondb.herokuapp.com/Courses")
        const data = Response.data
        return successHandler(data)
      }
      fetchData()
  }, [])

  const coursesComp = isLoading ? <div className="loader">Loading...</div> : courses.map((course, index) => (<Homecoursecard key={index} cardObj={course} />))
  
  return (
  <div className="cards-container my-5">
    {coursesComp}
    </div>
  )
}

const matchStateToProps = (state) => ({})
const matchDispatchToProps = (dispatch) => {
  return {
    updatecourses: (courses) => {
      dispatch({
        type: 'UPDATE_COURSES',
        data: courses
      })
    }
  }
}
export default connect(matchStateToProps, matchDispatchToProps)(Homecourses)