import React from 'react'
import {Helmet} from "react-helmet"
import Coursenav from './coursenav'
import Coursecard from './coursecard'
import Footer from '../Footer/footer'

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
            <Coursenav />
            <Coursecard />
            <Footer />
        </div>
    )
}

export default Courses