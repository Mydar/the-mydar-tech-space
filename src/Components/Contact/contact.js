import React, {useState} from 'react'
import Axios from "axios"
import { Redirect} from "react-router-dom"
import {Helmet} from 'react-helmet'
import Footer from '../Footer/footer'

function Contact() {
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
    })
    const [redirect, setRedirect] = useState(false)

    const handleChange = (event) => {
        const { name, value} = event.target;
        setInput((input) => ({
            ...input,
            [name]: value,
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        Axios.post("https://myjsondb.herokuapp.com/message", { ...input })
        .then(res => {
            setRedirect(true)
        })
    }
    const renderRedirect = () => {
      if (redirect) {
        return <Redirect to="./" />;
      }
    }
    return (
        <div>
          <Helmet>
          <meta charset="UTF-8" />
          <link rel="icon" href="./Favicon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Contact us at the Mydar Tech Space Academy" />
          <title>The Mydar Tech Space | Contact</title>
        </Helmet>
          {renderRedirect()}
          <div className="formContainer" style={{height: "100vh"}}>
            <div className="my-signup formdiv">
              <div className="text-center">
                <h4>Contact Form</h4>
              </div>
              <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label>First Name:</label>
                  <input
                    type="text"
                    name="firstname"
                    value={input.firstname}
                    onChange={handleChange}
                    placeholder="firstname"
                    id="firstname"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name: </label>
                  <input
                    type="text"
                    name="lastname"
                    value={input.lastname}
                    onChange={handleChange}
                    placeholder="lastname"
                    id="lastname"
                    className="form-control"
                    required
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
                    required
                  />
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea 
                      type="text" 
                      name="message" 
                      value={input.message} 
                      onChange={handleChange} 
                      placeholder="What message would you like to share with us?" 
                      id="message" 
                      className="form-control"
                      style={{height: '100px'}} 
                      required
                    />
                  </div>
                <div className="google-signup form-group">
                  <button className="btn btn-lg btn-outline-success">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      )
} 

export default Contact
