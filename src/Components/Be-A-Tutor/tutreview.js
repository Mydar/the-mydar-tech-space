import React, {useState, useEffect} from 'react'
import Reviews from '../Home/reviews'
import axios from 'axios'


function TutorReviews() {
    const [isLoading, setLoading] = useState(false)
    const [tutors, setTutors] = useState([])
    
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const result = await axios('https://myjsondb.herokuapp.com/Tutors')
            setTutors(result.data.slice(0,2))
            setLoading(false)
          }
          fetchData()
    }, [])
    
    const ReviewComp = isLoading ? "Loading..." : tutors.map((tutor, index) => {
        if(tutor.hasOwnProperty("Review")) {
            return <Reviews key={index} rev={tutor} />
        }
        return null
    })
    
    return (
        <div className="revCard">
            {ReviewComp}
        </div>
    )
}

export default TutorReviews