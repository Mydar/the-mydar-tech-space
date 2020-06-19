import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import GoogleLogin from "react-google-login";
import { signup_form } from "../Routing/links";
import { connect } from "react-redux";
import {Helmet} from "react-helmet"
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts'
import Footer from '../Footer/footer'
import './forms.css'

function Loginform(props) {
  const [checkPassword, setCheckPassword] = useState(false);
  const [responseStatus, setResposeStatus] = useState(0);
  const [input, setInput] = useState({
    students: [],
    tutors: [],
    email: "",
    password: "",
    redirect: false,
  });

  const responseGoogle = (response) => {
    if(response.profileObj) {
      const userEmail = response.profileObj.email;
      setCheckPassword(false);
      getUser(userEmail);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setCheckPassword(true)
    let re = /^\w+([.-]?w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if(input.email.length === 0) {
      ToastsStore.error("Please input your email")
    }
    else if (input.password.length === 0) {
      ToastsStore.error("Please input your password")
    }
    else if ( !re.test(input.email) ) {
      ToastsStore.error("Invalid Email Format!!!")
    }
    else{
      getUser(input.email);
    }
  };

  const handleChange = (event) => {
    const { name, value} = event.target;
    setInput((input) => ({
      ...input,
      [name]: value,
    }));
    if (name === "password") {
      setCheckPassword(true)
    }
  };

  useEffect(() => {
    const fetchStudentData = async () => {
      const Response = await axios("https://myjsondb.herokuapp.com/Students");
      setInput((input) => ({
        ...input,
        students: Response.data,
      }));
      if (Response.status === 200) {
        setResposeStatus(Response.status)
      }
    };
    const fetchTutorData = async () => {
      const Response = await axios("https://myjsondb.herokuapp.com/Tutors");
      setInput((input) => ({
        ...input,
        tutors: Response.data,
      }));
    };
    fetchStudentData();
    fetchTutorData();
  }, []);

  const getUser = (email) => {
    const studentWithInputEmail = input.students.filter((student) => student.email === email)
    const tutorWithInputEmail = input.tutors.filter((tutor) => tutor.email === email)

    const user = studentWithInputEmail.length !== 0 ? studentWithInputEmail[0] : tutorWithInputEmail.length !== 0 ? tutorWithInputEmail[0] : null
    
    if (user !== null && checkPassword) {
      checkUserPassword(user)
    } else if (user != null && !checkPassword) {
      confirmLogin(user)
    } else if (responseStatus !== 200) {
      ToastsStore.error("ERROR! check your internet connection")
    } else {
      ToastsStore.error("User does not exist, click SIGN UP to register")
    }
  };

  const checkUserPassword = (user) => {
    const password = input.password
    password === user.password ? confirmLogin(user) : ToastsStore.error("Incorrect Password")
  }

  const confirmLogin = (user) => {
    props.login(user)
    setInput((input) => ({
        ...input,
        redirect: true,
      }))
  }
  
  const renderRedirect = () => {
    const { redirect } = input
    if (redirect) {
      ToastsStore.success("You are now logged in!")
      return <Redirect to="./dashboard" />
    }
  }
  return (
    <div>
      {renderRedirect()}
      <ToastsContainer position={ToastsContainerPosition.TOP_LEFT} store={ToastsStore} />
      <Helmet>
        <meta charset="UTF-8" />
        <link rel="icon" href="./Favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="The login page for the Mydar Tech Space Academy for software developers" />
        <title>The Mydar Tech Space | Log In</title>
      </Helmet>
      <div className="formContainer" style={{height: "100vh"}}>
        <div className="my-signup formdiv">
          <div className="text-center">
            <h4>LOG IN</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                placeholder="email"
                id="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={handleChange}
                placeholder="password"
                id="password"
                className="form-control"
              />
            </div>
            <div className="google-signup form-group">
              <button className="btn btn-lg btn-outline-success">Log In</button>
              <span className="font-italic my-2">or login with google: </span>
              <GoogleLogin
                clientId="51949664772-92doa3fhdqmsm0nqcod6puolt55h3nu3.apps.googleusercontent.com"
                buttonText="LOG-IN"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </form>
          <div className="text-center">
            <p>
              Don't have an account?{" "}
              <Link to={signup_form}>
                <span className="font-italic">Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch({
        type: "LOG_USER_IN",
        data: user,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loginform);

