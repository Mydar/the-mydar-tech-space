import React from 'react'
import {Link} from 'react-router-dom'
import {login_form} from '../Routing/links'
import {connect} from 'react-redux'

function Footer(props) {
    return(
            <footer className="footer-div page-footer font-small special-color-dark pt-4">
                <div className="social-media">
                    <hr />
                    <ul className="social-media-list list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <button type="button" className="btn btn-primary btn-circle">
                                <a href="https://web.facebook.com/?_rdc=1&_rdr" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-facebook-square"></i>
                                </a>
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button type="button" className="btn btn-info btn-circle">
                                <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button type="button" className="btn btn-danger btn-circle">
                                <a href="https://www.instagram.com/accounts/login/?hl=en" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </button>
                        </li>
                        <li>
                            <button type="button" className="btn btn-primary btn-circle">
                                <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </button>
                        </li>
                    </ul>
                    <hr />
                </div>
                <div className="footer-text" style={{fontSize: 13}}>
                    <div className="footer-text-div">
                        <ul>
                            <Link to="/" ><li>The Mydar Tech Space</li></Link>
                            <Link to="/aboutus" ><li>About Us</li></Link>
                        </ul>
                    </div>
                    <div className="footer-text-div">
                        <ul>
                            <Link to="/contact" ><li>Contact</li></Link>
                            <Link to="/courses" ><li>Featured Courses</li></Link>
                        </ul>
                    </div>
                    <div className="footer-text-div">
                        <ul>
                            <Link to="/be-a-tutor" ><li>Be A Tutor</li></Link>
                            <>
                            {props.isLoggedIn ? <Link to="/" onClick={props.logout}>Log-Out</Link> : 
                            <Link to={login_form} ><li>Log In</li></Link>}
                            </>
                        </ul>
                    </div>
                    
                </div>
                <div className="copyright footer-copyright text-center py-3" style={{fontSize: 14, color: "#a1a1a1"}}>
                    <hr />
                    <ul>
                        <li>The <span className="brand-name">Mydar</span></li>
                        <li>Copyright © 2020 Mydar.Inc</li>
                        <li>Terms Privacy Policy and Cookie Policy</li>
                    </ul>
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