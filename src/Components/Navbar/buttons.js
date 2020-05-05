import React from "react";
import { Link } from "react-router-dom";
import { login_form, signup_form } from "../Routing/links";
import { connect } from "react-redux";

function Buttonlink(props) {
  const isLoggedIn = props.isLoggedIn;
  const initial1 = props.user.firstname[0];
  const initial2 = props.user.lastname[0];
  const designation = props.user.Designation;

  return (
    <>
      {!isLoggedIn ? (
        <>
          <Link className="btn btn-outline-warning mr-sm-4" to={signup_form}>Sign-Up</Link>
          <Link className="btn btn-warning mr-sm-4" to={login_form}>Log-In</Link>
        </>
      ) : (
        <>
          <Link className="btn btn-warning mr-sm-4" to="/" onClick={props.logout}>Log-Out</Link>
          <Link className="btn btn-circle btn-danger mr-sm-4" to={designation === "Student" ? "/studentdashboard" : "/tutordashboard"}>
            {initial1} {initial2}
          </Link>
        </>
      )}
    </>
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

export default connect(matchStateToProps, matchDispatchToProps)(Buttonlink);
