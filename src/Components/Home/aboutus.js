import React from 'react'
import TutorReviews from '../Be-A-Tutor/tutreview'
import StudentReviews from '../Students/stdreview'
import Footer from '../Footer/footer'
import { Link } from 'react-router-dom'
import {signup_form} from '../Routing/links'
import {Helmet} from 'react-helmet'


function AboutUs() {
    return(
        <div className="aboutus mt-5">
        <Helmet>
          <meta charset="UTF-8" />
          <link rel="icon" href="./Favicon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="About the Mydar Tech Space Academy, the platform to train software developers and engineers" />
          <title>The Mydar Tech Space | About</title>
        </Helmet>
            <div>
                <h1 className="text-center mt-5">About Us</h1>
            </div>
            <div className="introduction text-center">
                <p>The <span className="brand-name">Mydar</span> Tech Space is a platform created to connect students and teachers across the world. The essence of learning to create and build technological solutions cannot be overemphasized, and because we understand that "Alone we can do so little, but together we can do so much" – Helen Keller and "Talent wins games, but teamwork and intelligence win championships." – Michael Jordan, we intend to build a force that conquers all with Technology.</p>
                
            </div>
            <div className="text-center">
                <p>We in conjuction with experts across the globe, who signed up as tutors on the platform, intend to groom students, regardless of their age, sex, race or educational background to be sound Software developers and engineers at absolutely no cost.</p>
                <p>To be a part of the mydar tech space, sign up <span><Link to={signup_form}>Here</Link></span></p>
            </div>
            <div className="reviews-container">
                <TutorReviews />
                <StudentReviews />
            </div>
            <Footer />
        </div>
    )
} 

export default AboutUs