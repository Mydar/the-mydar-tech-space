import React from 'react';
import { Link } from 'react-router-dom'
import {dashboard_courses, dashboard_profile, course_upload} from '../Routing/links'

function Tutorsnav() {
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
                  <Link to={dashboard_profile} className="nav-link">Your Profile</Link>
                </li>
                <li className="list-group-item list-group-item-action bg-light">
                  <Link to={course_upload} className="nav-link">Course Upload</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
  )
}

export default Tutorsnav;