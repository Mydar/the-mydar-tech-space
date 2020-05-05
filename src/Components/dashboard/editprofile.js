import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import Axios from 'axios'

function EditProfile(props) {
    const user = props.user
    const userID = user.id
    const cloudName = 'mydar'
    const unsignedUploadPreset = 'ouhfbnsn'
    const [input, setInput] = useState(
        {
            email: user.email,
            password: user.password,
            firstname: user.firstname,
            lastname: user.lastname,
            Designation: user.Designation,
            profilePhotoUrl: user.profilePhotoUrl,
            Qualifications: user.Qualifications,
            Review: user.Review,
            courses: user.courses,
            favorites: user.favorites,
          }
    )
    const [ redirect, setRedirect ] = useState(false)
    
    const renderRedirect = () => {
        if (redirect && user.Designation === "Student") {
            return <Redirect to='/studentdashboard' />
        }
        if (redirect && user.Designation === "Tutor") {
            return <Redirect to='/tutordashboard' />
        }
    }
    const handleChange = (event) => {
        const {name, value} = event.target
        setInput(input => ({
            ...input, 
            [name]: value
        }))
    }
    const uploadFile = (file) => {
        let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`
        let xhr = new XMLHttpRequest()
        let fd = new FormData()
        xhr.open('POST', url, true)
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
        xhr.onreadystatechange = function(e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
              let response = JSON.parse(xhr.responseText)
              let url = response.secure_url
              setInput(input => ({
                ...input, 
                profilePhotoUrl: url
            }))
            }
        }
        fd.append('upload_preset', unsignedUploadPreset)
        fd.append('file', file);
        xhr.send(fd);

    }

    const handleFiles = (event) => {
        let file = event.target.files[0]
        uploadFile(file)
        
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.Designation === "Student") {
            Axios.put(`https://myjsondb.herokuapp.com/Students/${userID}`, {...input,})
            .then((res) => {
                props.updateUser(input)
            })
        } else if(user.Designation === "Tutor") {
            Axios.put(`https://myjsondb.herokuapp.com/Tutors/${userID}`, {...input,})
            .then((res) => {
                props.updateUser(input)
            })
        }
        setRedirect(true)
    }
    return (
        <div>
            {renderRedirect()}
            <div className="formContainer">
                <div className="google-signup formdiv">
                    <div className="form-group">
                        <div>
                            <div className="img-div mb-2"  style={{width: 300, height: 300}}>
                                <img src={input.profilePhotoUrl} alt={`${input.firstname} ${input.lastname}`} />
                            </div>
                        <input name="coverimage" type="file" accept="image/*" onChange={handleFiles} />
                        </div>
                    </div>
                </div>
                <div className="my-signup formdiv">
                    <div className="text-center">
                        <h4>EDIT PROFILE</h4>
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
                        <div className="form-group">
                            <label>Qualifications</label>
                            <input 
                                type="text" 
                                name="Qualifications" 
                                value={input.Qualifications} 
                                onChange={handleChange} 
                                placeholder="Qualifications" 
                                id="Qualifications" 
                                className="form-control" 
                            />
                        </div>
                        <div className="form-group">
                            <label>Are you a student or a tutor?</label>
                            <select 
                                name="designation" 
                                value={input.designation} 
                                onChange={handleChange} 
                                placeholder="designation" 
                                id="designation" 
                                className="form-control"
                                required
                            >
                                <option value="">--Pick designation--</option>
                                <option value="student">Student</option>
                                <option value="tutor">Tutor</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Review</label>
                            <textarea 
                                type="text" 
                                name="Review" 
                                value={input.Review} 
                                onChange={handleChange} 
                                placeholder="Give A Review of The Mydar Tech Space platform" 
                                id="review" 
                                className="form-control"
                                style={{height: '100px'}} 
                            />
                        </div>
                        <div className="google-signup form-group">
                            <button className="btn btn-lg btn-outline-success">Add Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const matchStateToProps = (state) => ({user: state.user})

const matchDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => {
            dispatch({
                type: "UPDATE_USER_INFO",
                data: user
            })
        }
    }
}
export default connect(matchStateToProps, matchDispatchToProps)(EditProfile)