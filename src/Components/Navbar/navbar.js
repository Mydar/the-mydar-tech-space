import React from 'react'
import { Link } from 'react-router-dom'
import { courses, be_a_tutor } from '../Routing/links'
import './navbar.css'
import { login_form, signup_form } from "../Routing/links";
import { connect } from "react-redux";


function Navbar(props) {
    const isLoggedIn = props.isLoggedIn;
    const initial1 = props.user.firstname[0];
    const initial2 = props.user.lastname[0];
    const designation = props.user.Designation;
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top">
                <Link to="/" className="navbar-brand-text navbar-brand">The <span className="brand-name">Mydar</span></Link> |
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={courses} className="nav-link navbar-text">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={be_a_tutor} className="nav-link navbar-text">Be A Tutor</Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        {!isLoggedIn ?
                            <Link className="btn btn-warning mr-sm-3" to={login_form}>Log-In</Link> :
                            <Link className="btn btn-circle btn-danger mr-sm-3" to="/dashboard">
                                {initial1.toUpperCase()} {initial2.toUpperCase()}
                            </Link>
                        }
                    </form>
                    <form class="form-inline my-2 my-lg-0">
                        {!isLoggedIn ?
                            <Link className="btn btn-outline-warning mr-sm-3" to={signup_form}>Sign-Up</Link> :
                            <Link className="btn btn-warning mr-sm-3" to="/" onClick={props.logout}>Log-Out</Link>
                        }
                    </form>
                </div>
            </nav>
        </div>
    )
}
const matchStateToProps = (state) => ({
    user: state.user,
    isLoggedIn: state.isLoggedIn,
});

const matchDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch({
                type: "LOG_USER_OUT",
            });
        },
    };
};

export default connect(matchStateToProps, matchDispatchToProps)(Navbar)