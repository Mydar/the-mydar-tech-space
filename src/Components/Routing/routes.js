import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import Home from '../Home/home'
import Courses from '../Courses/courses'
import BeATutor from '../Be-A-Tutor/be-a-tutor'
import SignUpForm from '../forms/signupform'
import Loginform from '../forms/loginform';
import Dashboard from '../forms/dashboard';
import Tutdashboard from '../forms/tutdashboard';
import Usercourses from '../dashboard/usercourses';
import Coursepage from '../Courses/coursepage'
import Userprofile from '../dashboard/profile'
import Favorites from '../dashboard/favorites';
import {
dashboard_courses,
dashboard_profile,
dashboard_favorites,
dashboard_coursepage,
courses,
edit_profile,
be_a_tutor,
login_form,
signup_form,
student_dashboard,
tutor_dashboard,
course_upload
} from './links'
import CourseUpload from '../Courses/courseupload'
import EditProfile from '../dashboard/editprofile'
import {connect} from 'react-redux'
import AboutUs from '../Home/aboutus'
import Contact from '../Home/contact'

 
const Routes = (props) => {
    const isLoggedIn = props.isLoggedIn
    return(
    <Switch>
        <Route path={courses}><Courses /></Route>
        <Route path={be_a_tutor}><BeATutor /></Route>
        <Route path={signup_form}>{!isLoggedIn ? <SignUpForm /> : <Redirect to='./'/>}</Route>
        <Route path={login_form}>{!isLoggedIn ? <Loginform /> : <Redirect to='./'/>}</Route>
        <Route path={student_dashboard}>{isLoggedIn ? <Dashboard /> : <Redirect to='./' />}</Route>
        <Route path={tutor_dashboard}>{isLoggedIn ? <Tutdashboard /> : <Redirect to='./' />}</Route>
        <Route path={dashboard_courses}>{isLoggedIn ? <Usercourses /> : <Redirect to='../' />}</Route>
        <Route path={dashboard_coursepage}>{isLoggedIn ? <Coursepage /> : <Redirect to='../' />}</Route>
        <Route path={dashboard_profile}>{isLoggedIn ? <Userprofile /> : <Redirect to='../' />}</Route>
        <Route path={dashboard_favorites}>{isLoggedIn ? <Favorites /> : <Redirect to='../' />}</Route>
        <Route path={edit_profile}>{isLoggedIn ? <EditProfile /> : <Redirect to='../' />}</Route>
        <Route path={course_upload}>{isLoggedIn ? <CourseUpload/> : <Redirect to='./' />}</Route>
        <Route path="/aboutus"><AboutUs /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/"><Home /></Route>
    </Switch>
    )
    
}
const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.isLoggedIn
    }
  }

export default connect(mapStateToProps)(Routes)