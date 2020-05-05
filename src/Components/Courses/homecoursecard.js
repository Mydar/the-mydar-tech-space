import React, { useState, useEffect } from "react"
import Card from "./card"
import axios from "axios"
import {connect} from 'react-redux'

function Homecoursecard(props) {
  const [isLoading, setLoading] = useState(false)
  const [courses, setCourses] = useState([])
 
  const successHandler = (data) => {
    props.updatecourses(data)
    setCourses(data.slice(0,5))
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

  const coursesComp = isLoading ? "Loading..." : courses.map((course, index) => (<Card key={index} cardObj={course} />))
  
  return (
  <div className="cards-container">
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
export default connect(matchStateToProps, matchDispatchToProps)(Homecoursecard)