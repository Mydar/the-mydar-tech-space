import React from 'react'
import {Helmet} from "react-helmet"
import Slideshow from './slides'
import Ribbon from './ribbon'
import Tutors from '../Be-A-Tutor/tutor'
import Footer from '../Footer/footer'
import TutorReviews from '../Be-A-Tutor/tutreview'
import StudentReviews from '../Students/stdreview'
import Homecoursecard from '../Courses/homecoursecard'

function Home() {
    return(
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <link rel="icon" href="./Favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="The Home page for the Mydar Tech Space Academy for software developers" />
                <title>The Mydar Tech Space | Home</title>
            </Helmet>
            <Slideshow />
            <hr />
            <h4>Available Courses</h4>
            <Homecoursecard />
            <Ribbon />
            <h4>Some of the Tutors</h4>
            <Tutors />
            <div className="reviews-container">
                <TutorReviews />
                <StudentReviews />
            </div>
            <Footer />
        </div>
    )
}

export default Home