import React from 'react'
import {Helmet} from "react-helmet"
import Coursecard from './coursecard'
import Footer from '../Footer/footer'
import CoursesIntroduction from './coursesintroduction'
import CoursesCategories from './coursescategories'

function Courses() {
   return(
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <link rel="icon" href="./Favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="The Programing Courses page for the Mydar Tech Space Academy for software developers" />
                <title>The Mydar Tech Space | Courses</title>
            </Helmet>
            <CoursesIntroduction />
            <CoursesCategories />
            <Coursecard />
            <Footer />
        </div>
    )
}

export default Courses