import React from 'react'
import Footer from '../Footer/footer'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'
import WelcomeNote from './welcomenote';

function Tutdashboard(props) {
  return(
      <div>
        <Helmet>
          <meta charset="UTF-8" />
          <link rel="icon" href="./Favicon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="The tutor dashboard for the Mydar Tech Space Academy for software developers" />
          <title>The Mydar Tech Space | Dashboard</title>
        </Helmet>
        <WelcomeNote user={props.user}/>
        <Footer />
      </div>
    )
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    courses: state.courses
  }
}

export default connect(mapStateToProps)(Tutdashboard)