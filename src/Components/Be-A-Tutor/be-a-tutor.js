import React from 'react'
import {Helmet} from "react-helmet"
import Slideshow from '../Home/slides'
import Guidelines from './guideline'
import Footer from '../Footer/footer'
import TutorReviews from './tutreview'

function BeATutor() {
    return(
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <link rel="icon" href="./Favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="The Tutors registration page for the Mydar Tech Space Academy for software developers" />
                <title>The Mydar Tech Space | Be A Tutor</title>
            </Helmet>
            <Slideshow />
            <Guidelines />
            <TutorReviews />
            <Footer />
        </div>
    )
}

export default BeATutor