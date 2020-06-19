import React from 'react';
import { Link } from 'react-router-dom'

function Dashnav(props) {
  const designation = props.user.Designation
  return (
    <div className="categories-container">
      <ul className="categories-list">
        <li>FrontEnd Development</li>
        <li>BackEnd Development</li>
        <li>DevOps Engineering</li>
        <li>Mobile Development</li>
      </ul>
    </div>
  )
}

export default Dashnav