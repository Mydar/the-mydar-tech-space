import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import GoogleLogin from "react-google-login";
import { signup_form } from "../Routing/links";
import { connect } from "react-redux";
import {Helmet} from "react-helmet"

function Loginform(props) {
  const [userInfo, setUserInfo] = useState({});
  const [checkPassword, setCheckPassword] = useState(false);
  const [input, setInput] = useState({
    students: [],
    tutors: [],
    email: "",
    password: "",
    user: "",
    redirect: false,
  });

  const responseGoogle = (response) => {
    const userEmail = response.profileObj.email;
    setCheckPassword(false);
    getUser(userEmail);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getUser(input.email);
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    type === "password" ? setCheckPassword(true) : setCheckPassword(false);
    setInput((input) => ({
      ...input,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchStudentData = async () => {
      const Response = await axios("https://myjsondb.herokuapp.com/Students");
      setInput((input) => ({
        ...input,
        students: Response.data,
      }));
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
    const studentWithInputEmail = input.students.filter((student) => {
      return student.email === email
    })
    const tutorWithInputEmail = input.tutors.filter((tutor) => {
      return tutor.email === email
    })

    const user = studentWithInputEmail.length !== 0 ? studentWithInputEmail[0] : tutorWithInputEmail.length !== 0 ? tutorWithInputEmail[0] : null
    setUserInfo(user)

    if (user !== null && checkPassword) {
      checkUserPassword(user)
    } else if (user != null && !checkPassword) {
      confirmLogin(user)
    } else {
      alert("user does not exist");
    }
  };

  const checkUserPassword = (user) => {
    const password = input.password
    password === user.password ? confirmLogin(user) : alert("Incorrect Password")
  }

  const confirmLogin = (user) => {
    props.login(user)
    if (user.Designation === "Student") {
      setInput((input) => ({
        ...input,
        user: "student",
        redirect: true,
      }))
    } else if (user.Designation === "Tutor") {
      setInput((input) => ({
        ...input,
        user: "tutor",
        redirect: true,
      }))
    }
  }
  const renderRedirect = () => {
    const { redirect, user } = input
    if (redirect && user === "student") {
      return <Redirect to="./studentdashboard" />;
    } else if (redirect && user === "tutor") {
      return <Redirect to="./tutordashboard" />;
    }
  }
  return (
    <div>
      {renderRedirect()}
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
                required
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
                required
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
