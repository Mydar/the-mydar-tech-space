import React, { useState } from "react";
import Axios from "axios";
import Slideshow from "../Home/slides";
import Footer from "../Footer/footer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ProgressBar from "bootstrap-progress-bar";

function CourseUpload(props) {
  const user = props.user;
  const userCourses = user.courses;
  const cloudName = "mydar";
  const unsignedUploadPreset = "ouhfbnsn";
  const [input, setInput] = useState({
    title: "",
    photoUrl: "",
    videoUrl: "",
    description: "",
    Tutor: user.id,
    Hours: "",
    Track: "",
    Rating: "",
  });
  const [redirect, setRedirect] = useState(false);
  const [percent, setPercent] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((input) => ({
      ...input,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, photoUrl, videoUrl, description, Track } = input;
    if (
      title === "" &&
      photoUrl === "" &&
      videoUrl === "" &&
      description === "" &&
      Track === ""
    ) {
      alert("Please enter all fields");
    } else {
      handleUpload();
    }
  };

  const handleUpload = () => {
    Axios.post("https://myjsondb.herokuapp.com/Courses", { ...input }).then(
      (res) => {
        const courses = props.courses;
        courses.push(res.data);
        props.updatecourses(courses);
        const thisCourseId = res.data.id;
        updateUserCourses(thisCourseId);
        setRedirect(true);
      }
    );
  };
  const updateUserCourses = (courseId) => {
    userCourses.push(courseId);
    props.updateUser(user);
    Axios.put(`https://myjsondb.herokuapp.com/Tutors/${user.id}`, { ...user });
  };

  const uploadFile = (file, shouldSaveURLToPhoto = true) => {
    let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    let xhr = new XMLHttpRequest();
    let fd = new FormData();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.upload.onprogress = (event) => {
      const { loaded, total } = event;

      let progress = Math.round((loaded * 100.0) / total);
      setPercent(progress)
    }
    xhr.onreadystatechange = function (e) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        let url = response.secure_url;
        setInput((input) => {
          if (shouldSaveURLToPhoto) {
            return { ...input, photoUrl: url };
          } else {
            return { ...input, videoUrl: url };
          }
        });
      }
    };
    fd.append("upload_preset", unsignedUploadPreset);
    fd.append("file", file);
    xhr.send(fd);
  }

  const handleFiles = (event) => {
    let file = event.target.files[0];
    const { name } = event.target;
    const shouldSaveURLToPhoto = name === "coverimage";
    uploadFile(file, shouldSaveURLToPhoto);
  }

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="./dashboard" />;
    }
  }
  return (
    <div>
      {renderRedirect()}
      <div className="formContainer py-5">
        <div className="my-signup formdiv">
          <form onSubmit={handleSubmit} method="POST">
            <div className="form-group">
              <label>Course Title</label>
              <input
                type="text"
                name="title"
                value={input.title}
                onChange={handleChange}
                placeholder="Course Title"
                id="coursetitle"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Course Description</label>
              <textarea
                type="text"
                name="description"
                value={input.description}
                onChange={handleChange}
                placeholder="About the course"
                id="designation"
                className="form-control"
                style={{ height: "100px" }}
                required
              />
            </div>
            <div className="form-group">
              <label>Course Duration(in hours)</label>
              <input
                type="text"
                name="Hours"
                value={input.Hours}
                onChange={handleChange}
                placeholder="Course duration in hours"
                id="Hours"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>What Track Category does the course belong?</label>
              <select
                name="Track"
                value={input.Track}
                onChange={handleChange}
                placeholder="Track"
                id="Track"
                className="form-control"
                required
              >
                <option value="">--Pick Track Category--</option>
                <option value="frontend">Frontend Development</option>
                <option value="backend">Backend Development</option>
                <option value="mobile">Mobile Development</option>
                <option value="devops">Devops Engineering</option>
              </select>
            </div>
            <div className="form-group">
              <label>Upload Cover Image for the course</label>
              <div>
                {input.photoUrl && (
                  <div
                    className="img-div mb-2"
                    style={{ width: 200, height: 200 }}
                  >
                    <img src={input.photoUrl} alt={input.title} />
                  </div>
                )}
                <input
                  name="coverimage"
                  type="file"
                  accept="image/*"
                  onChange={handleFiles}
                  required
                />
                {percent > 0 && percent < 100 && (
                  <ProgressBar now={percent} active label={`${percent}%`} />
                )}
              </div>
            </div>
            <div className="form-group">
              <label>Upload Video Content</label>
              <div>
                <input
                  name="video"
                  type="file"
                  accept="video/*"
                  onChange={handleFiles}
                  required
                />
              </div>
            </div>
            <div className="google-signup form-group">
              <button className="btn btn-lg btn-outline-success">Upload</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
const matchStateToProps = (state) => ({
  user: state.user,
  courses: state.courses,
});
const matchDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch({
        type: "UPDATE_USER_INFO",
        data: user,
      });
    },
    updatecourses: (courses) => {
      dispatch({
        type: "UPDATE_COURSES",
        data: courses,
      });
    },
  };
};

export default connect(matchStateToProps, matchDispatchToProps)(CourseUpload);