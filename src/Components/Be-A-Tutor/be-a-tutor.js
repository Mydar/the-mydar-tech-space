import React from 'react'
import { Helmet } from "react-helmet"
import Guidelines from './guideline'
import Footer from '../Footer/footer'
import TutorReviews from '../Reviews/tutreview'
import './beatutor.css'
import Tutors from '../Home/tutor'

function BeATutor() {
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <link rel="icon" href="./Favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="The Tutors registration page for the Mydar Tech Space Academy for software developers" />
                <title>The Mydar Tech Space | Be A Tutor</title>
            </Helmet>
            <div className="beatutor-introduction"></div>
            <Guidelines />
            <div style={{backgroundColor: "rgb(17, 17, 17)"}}>
                <Tutors />
            </div>
            <TutorReviews />
            <Footer />
        </div>
    )
}

export default BeATutor