import React from 'react'
import {Helmet} from "react-helmet"
import './home.css'
import Ribbon from './ribbon'
import Tutors from './tutor'
import Footer from '../Footer/footer'
import HomeTutor from './hometutor'
import Homecourses from './homecourses'
import LearnWithUs from './learnwithus'
import HomeReviews from './homereviews'

function Home() {
    return(
        <div class="Home">
            <Helmet>
                <meta charset="UTF-8" />
                <link rel="icon" href="./Favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="The Home page for the Mydar Tech Space Academy for software developers" />
                <title>The Mydar Tech Space | Home</title>
            </Helmet>
            <LearnWithUs />
            <div style={{backgroundColor: "black"}}>
                <div className="courses-container" >
                    <p>EXPLORE THE WORLD OF SOFTWARE DEVELOPMENT...</p>
                </div>
                <Homecourses />
            </div>
            <Ribbon />
            <HomeTutor />
            <div style={{backgroundColor: "rgb(17, 17, 17)"}}>
                <div className="tutors-container" >
                    <p style={{color: "white"}}>Meet our tutors</p>
                </div>
                <Tutors />
            </div>
            <div className="reviews-container p-5">
                <HomeReviews />
            </div>
            <Footer />
        </div>
    )
}

export default Home