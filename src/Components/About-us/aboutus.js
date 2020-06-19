import React from 'react'
import TutorReviews from '../Reviews/tutreview'
import StudentReviews from '../Reviews/stdreview'
import Footer from '../Footer/footer'
import { Link } from 'react-router-dom'
import { signup_form } from '../Routing/links'
import { Helmet } from 'react-helmet'
import HomeReviews from '../Home/homereviews'
import './aboutus.css'


function AboutUs() {
    return (
        <div className="aboutus mt-5">
            <Helmet>
                <meta charset="UTF-8" />
                <link rel="icon" href="./Favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="About the Mydar Tech Space Academy, the platform to train software developers and engineers" />
                <title>The Mydar Tech Space | About</title>
            </Helmet>
            <div className="about-us-welcome text-center px-4">
                <p> Learning And Building Technology</p>
            </div>
            <div className="about-us-content">
                <div>
                    <p className="about-us-heading brand-name">About Us</p>
                </div>
                <div className="introduction text-center">
                    <p className="py-5 px-3 text-center" style={{fontSize: "20px", borderBottom: '1px solid rgb(37, 37, 37)'}}>
                        The <span className="brand-name">Mydar</span> Tech Space is a platform created to connect students and teachers across the world. The essence of learning to create and build technological solutions cannot be overemphasized, and because we understand that, we intend to build a force that conquers all with Technology. 
                        <p>We in conjuction with experts across the globe, who signed up as tutors on the platform, intend to groom students, regardless of their age, sex, race or educational background to be sound Software developers and engineers at absolutely no cost.</p>
                    </p>
                    <div className="quote-cards-div py-5 px-3">
                        <div className="quote-cards">
                            <p>"Alone we can do so little, but together we can do so much"<p>– Helen Keller</p></p>
                        </div>
                        <div className="quote-cards">
                            <p>"Talent wins games, but teamwork and intelligence win championships."<p>– Michael Jordan</p></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutus-join-div" style={{backgroundImage: `url('https://lh3.googleusercontent.com/proxy/1iyvJoIcvV6v1qfIfQTrU7NCVb-Tk0vBV9VuK8lENLQXToJ-x5WEqyOU7ER5xizqEnWET60TUnzpz_vIB9Lfygu8lnfVbydBzDDmrFZa7mN1B8_FeNMQ2IKPcY4k3zXUPo21s-t3fUNxVLz7j8yYHPCIhPSp6MoE8i4')`}}>
            <div className="aboutus-join-text-div">
                <div className="p-3">
                    <p className="aboutus-join-body">Sign up to be a part of<br /> The <span className="brand-name">Mydar</span> Tech Space</p>
                    <div className="aboutus-join-text-button-div">
                        <Link to='/signupform'><button className="btn btn-primary mb-sm-2" type="button"><span style={{fontSize: "20px"}}>Join Us Now</span></button></Link>
                    </div>
                </div>
            </div>
        </div>
            <div className="reviews-container p-5">
                <HomeReviews />
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs