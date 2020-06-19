import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import { login_form } from '../Routing/links'
import { Helmet } from 'react-helmet'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts'
import Footer from '../Footer/footer'
import './forms.css'

function SignUpForm() {
    const [input, setInput] = useState(
        {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            Designation: "",
            profilePhotoUrl: "https://workhound.com/wp-content/uploads/2017/05/placeholder-profile-pic.png",
            Qualifications: "",
            Review: "",
            courses: [],
            favorites: []
        }
    )
    const [students, setStudents] = useState([])
    const [tutors, setTutors] = useState([])
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(true)
    const [checkPassword, setCheckPassword] = useState(false)
    const [showGoogle, setShowGoogle] = useState(true)
    const [redirect, setRedirect] = useState(false)

    const handleChange = (event) => {
        const {name, value} = event.target
        setInput(input => ({
            ...input, 
            [name]: value
        }))
        if(name === "confirmPassword") {
            setConfirmPassword(value)
        }
    }
    const handlePassword = (event) => {
        const {name, value} = event.target
        setInput(input => ({
            ...input, 
            [name]: value
        }))
        setCheckPassword(true)
    }
    useEffect(() => {
        const fetchStudentData = async () => {
            const Response = await Axios("https://myjsondb.herokuapp.com/Students")
            setStudents(Response.data)
        }
        const fetchTutorData = async () => {
            const Response = await Axios("https://myjsondb.herokuapp.com/Tutors")
            setTutors(Response.data)
        }
        fetchStudentData()
        fetchTutorData()
    }, [])

    const getUser = (email) => {
        const studentWithInputEmail = students.filter((student) => student.email === email)
        const tutorWithInputEmail = tutors.filter((tutor) => tutor.email === email)

        const user = studentWithInputEmail.length !== 0 ? studentWithInputEmail[0] : tutorWithInputEmail.length !== 0 ? tutorWithInputEmail[0] : null

        if (user === null) {
            handlePost()
        } else {
            ToastsStore.error('User already exists')
            setInput(input => ({
                ...input,
                email: "",
                firstname: "",
                lastname: ""
            }))
            setShowPassword(true)
            setShowGoogle(true)
        }
    }

    const responseGoogle = (response) => {
        if (response.profileObj) {
            const userEmail = response.profileObj.email
            const userFirstname = response.profileObj.givenName
            const userLastname = response.profileObj.familyName
            const userImage = response.profileObj.imageUrl
            setInput(input => ({
                ...input,
                email: userEmail,
                firstname: userFirstname,
                lastname: userLastname,
                profilePhotoUrl: userImage
            }))
            setShowPassword(false)
            setShowGoogle(false)
            getUser(userEmail)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const { firstname, lastname, Designation, email, password, confirmPassword } = input
        let re = /^\w+([.-]?w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (email.length === 0) {
            ToastsStore.error("Please input your email")
        }
        else if (firstname.length === 0) {
            ToastsStore.error("Please input your first name")
        }
        else if (lastname.length === 0) {
            ToastsStore.error("Please input your last name")
        }
        else if (Designation.length === 0) {
            ToastsStore.error("Please pick a designation")
        }
        else if (!re.test(input.email)) {
            ToastsStore.error("Invalid Email Format!!!")
        }
        else if (showPassword && password.length === 0) {
            ToastsStore.error("Please create a password")
        } 
        else if (checkPassword && password !== confirmPassword) {
            ToastsStore.error('Passwords do not match!')
    } 
        else {
            getUser(email)
        }
    }

    const handlePost = () => {
        if (input.Designation === "Student") {
            Axios.post("https://myjsondb.herokuapp.com/Students", { ...input })
                .then(res => {
                    setRedirect(true)
                    ToastsStore.success('You have successfully registered')
                })
        } else if (input.Designation === "Tutor") {
            Axios.post("https://myjsondb.herokuapp.com/Tutors", { ...input })
                .then(res => {
                    setRedirect(true)
                    ToastsStore.success('You have successfully registered')
                })
        }
    }
    const renderRedirect = () => {
        if (redirect) {
            return <Redirect to="./loginform" />
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
                <meta name="description" content="The signup page for the Mydar Tech Space Academy for software developers" />
                <title>The Mydar Tech Space | Sign Up</title>
            </Helmet>
            <div className="formContainer py-5">
                <div className="my-signup formdiv">
                    <div className="text-center">
                        <h4>REGISTRATION</h4>
                        <p>All Fields Are Required</p>
                    </div>
                    <form onSubmit={handleSubmit} method="POST">
                        <div className="form-group">
                            <label>FirstName</label>
                            <input
                                type="text"
                                name="firstname"
                                value={input.firstname}
                                onChange={handleChange}
                                placeholder="firstname"
                                id="firstname"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>LastName</label>
                            <input
                                type="text"
                                name="lastname"
                                value={input.lastname}
                                onChange={handleChange}
                                placeholder="lastname"
                                id="lastname"
                                className="form-control"
                            />
                        </div>
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
                        {showPassword && (
                            <div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={input.password}
                                        onChange={handlePassword}
                                        placeholder="password"
                                        id="password"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        onChange={handleChange}
                                        placeholder="confirmpassword"
                                        id="confirmpassword"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        )}
                        <div className="form-group">
                            <label>Are you a student or a tutor?</label>
                            <select
                                name="Designation"
                                value={input.Designation}
                                onChange={handleChange}
                                placeholder="designation"
                                id="designation"
                                className="form-control"
                            >
                                <option value="">--Pick designation--</option>
                                <option value="Student">Student</option>
                                <option value="Tutor">Tutor</option>
                            </select>
                        </div>
                        <div className="google-signup form-group">
                            <button className="btn btn-lg btn-outline-success">Sign Up</button>
                            {showGoogle && (
                                <div className="google-signup">
                                    <span className="font-italic my-2">or signup with google: </span>
                                    <GoogleLogin
                                        clientId="51949664772-92doa3fhdqmsm0nqcod6puolt55h3nu3.apps.googleusercontent.com"
                                        buttonText="SIGN-UP"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                </div>
                            )}
                        </div>
                    </form>
                    <div className="text-center">
                        <p>Already Registered? <Link to={login_form}><span className="font-italic">Log In</span></Link></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignUpForm