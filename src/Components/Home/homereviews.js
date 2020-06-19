import React, { useState, useEffect } from 'react'
import Reviews from '../Reviews/reviews'
import axios from 'axios'

function HomeReviews() {
    const [isLoading, setLoading] = useState(false)
    const [students, setStudents] = useState([])
    const [tutors, setTutors] = useState([])
    
    useEffect(() => {
        setLoading(true)
        const fetchTutorsData = async () => {
            const result = await axios('https://myjsondb.herokuapp.com/Tutors')
            setTutors(result.data.slice(0,2))
            setLoading(false)
        
          }
          const fetchStudentsData = async() => {
            const Response = await axios("https://myjsondb.herokuapp.com/Students")
            setStudents(Response.data.slice(0,2))
            setLoading(false)
        }
        fetchTutorsData()
        fetchStudentsData()
    }, [])
    
    const StudentReviewComp = students.map((student, index) => {
            if(student.hasOwnProperty("Review")) {
                return <Reviews key={index} rev={student} />
            }
            return null
    })
    const TutorReviewComp = tutors.map((tutor, index) => {
            if(tutor.hasOwnProperty("Review")) {
                return <Reviews key={index} rev={tutor} />
            }
            return null
    })
    
    const ReviewComp = isLoading ? <div className="loader">Loading...</div> : StudentReviewComp.concat(TutorReviewComp)
    
    return (
        <div className="revCard">
            {ReviewComp}
        </div>
    )
}

export default HomeReviews