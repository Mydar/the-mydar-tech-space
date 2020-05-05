import React, { useState, useEffect } from 'react'
import Reviews from '../Home/reviews'
import axios from 'axios'

function StudentReviews() {
    const [isLoading, setLoading] = useState(false)
    const [students, setStudents] = useState([])
    
    useEffect(() => {
        setLoading(true)
        const fetchData = async() => {
            const Response = await axios("https://myjsondb.herokuapp.com/Students")
            setStudents(Response.data.slice(0,2))
            setLoading(false)
        }
        fetchData()
    }, [])
    
    const ReviewComp = isLoading ? "Loading..." : students.map((student, index) => {
            if(student.hasOwnProperty("Review")) {
                return <Reviews key={index} rev={student} />
            }
            return null
    })
    
    return (
        <div className="revCard">
            {ReviewComp}
        </div>
    )
}

export default StudentReviews