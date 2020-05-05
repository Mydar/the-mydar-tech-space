import React, {useState, useEffect} from 'react'
import Tutorcard from '../Be-A-Tutor/tutorcard'
import axios from 'axios'
import {connect} from 'react-redux'


function Tutors(props) {
    const [isLoading, setLoading] = useState(false)
    const [tutors, setTutors] = useState([])
    const courses = props.courses
   
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const result = await axios('https://myjsondb.herokuapp.com/Tutors')
            setTutors(result.data.slice(0,5))
            setLoading(false)
          }
          fetchData()
    }, [])
    
    const TutorComp = isLoading ? "Loading..." : tutors.map((tutor, index) => <Tutorcard key={index} cardObj={tutor} courses={courses}/>)
    
    return (
        <div className="cards-container">
            {TutorComp}
        </div>
    )
}
const matchStateToProps = (state) => ({courses: state.courses})
export default connect(matchStateToProps)(Tutors)