import React from 'react'
import { Link } from 'react-router-dom'
import { login_form } from '../Routing/links'
import { connect } from 'react-redux'
import './footer.css'

function Footer(props) {
    return (
        <footer className="footer-div page-footer font-small special-color-dark py-4" style={{ backgroundColor: "black" }}>
            <div className="footer-logo">
                <p>THE <span className="footer-logo-brand">MYDAR</span> TECH SPACE</p>
            </div>
            <div className="footer-content">
                <div className="social-media px-3 my-4">
                    <ul className="social-media-list list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <button type="button" className="btn btn-primary btn-circle mx-3">
                                <a href="https://web.facebook.com/?_rdc=1&_rdr" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-facebook-square"></i>
                                </a>
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button type="button" className="btn btn-info btn-circle mx-3">
                                <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button type="button" className="btn btn-danger btn-circle mx-3">
                                <a href="https://www.instagram.com/accounts/login/?hl=en" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </button>
                        </li>
                        <li>
                            <button type="button" className="btn btn-primary btn-circle mx-3">
                                <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="footer-text px-5" style={{ fontSize: 13 }}>
                    <ul>
                        <Link to="/"><li>Home</li></Link> <span className="footer-text-separator"> | </span>
                        <Link to="/aboutus" ><li>About Us</li></Link> <span className="footer-text-separator"> | </span>
                        <Link to="/contact" ><li>Contact</li></Link> <span className="footer-text-separator"> | </span>
                        <Link to="/courses" ><li>Featured Courses</li></Link> <span className="footer-text-separator"> | </span>
                        <Link to="/be-a-tutor" ><li>Be A Tutor</li></Link> <span className="footer-text-separator"> | </span>
                        <>
                            {props.isLoggedIn ? <Link to="/" onClick={props.logout}><li>Log-Out</li></Link> :
                                <Link to={login_form} ><li>Log In</li></Link>}
                        </>
                    </ul>
                </div>
                <div className="copyright footer-copyright text-center py-3" style={{ fontSize: 14, color: "#a1a1a1" }}>
                    <ul>
                        <li>Copyright © 2020 Mydar.Inc</li>
                        <li>Terms Privacy Policy and Cookie Policy</li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}

const matchStateToProps = (state) => ({
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
export default connect(matchStateToProps, matchDispatchToProps)(Footer)