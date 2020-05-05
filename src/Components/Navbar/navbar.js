import React from 'react'
import { Link } from 'react-router-dom'
import Buttonlink from './buttons'
import {courses, be_a_tutor} from '../Routing/links'


function Navbar() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
                <Link to="/" className="navbar-brand">The <span className="brand-name">Mydar</span></Link> |
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={courses} className="nav-link">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={be_a_tutor} className="nav-link">Be A Tutor</Link>
                        </li>
                    </ul>
                    <div className="navbar-nav mr-2 d-flex flex-row-reverse my-2 my-lg-0">
                    <Buttonlink />
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar