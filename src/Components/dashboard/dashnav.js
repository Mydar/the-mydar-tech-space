import React from 'react';
import { Link } from 'react-router-dom'
import {dashboard_courses, dashboard_profile, dashboard_favorites, course_upload} from '../Routing/links'
import {connect} from 'react-redux'

function Dashnav(props) {
  const designation = props.user.Designation
  return (
      <div className="App">
        <div className="wrapper">
          <div className="sidebar bg-light border-right">
            <nav>
              <ul className="list-unstyled list-group list-group-flush" >
                <li className="list-group-item list-group-item-action bg-light">
                  <Link to={dashboard_courses} className="nav-link">Your Courses</Link>
                </li>
                <li className="list-group-item list-group-item-action bg-light">
                  <Link to={dashboard_profile} className="nav-link">Your profile</Link>
                </li>
                <div>
                  {designation === "Student" ? 
                  <li className="list-group-item list-group-item-action bg-light">
                    <Link to={dashboard_favorites} className="nav-link">Favorites</Link>
                  </li> :
                  <li className="list-group-item list-group-item-action bg-light">
                    <Link to={course_upload} className="nav-link">Course Upload</Link>
                  </li>
                  }
                </div>
                
                
              </ul>
            </nav>
          </div>
        </div>
      </div>
  )
}
const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps)(Dashnav)