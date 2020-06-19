import React from 'react'
import Card from '../Courses/card'
import { Link } from 'react-router-dom'
import FavoritesIcon from '../../Images/favorite-icon.png'
import { dashboard_favorites } from '../Routing/links'

function DashboardFavorites(props) {
    const userFavoriteCourses = props.user.favorites.map((courseId) => props.courses.find((course) => course.id === courseId))
    const favorites = userFavoriteCourses.map((course, index) => <Card key={index} cardObj={course} />)
    const noFavoriteCourse = <p className="no-course text-center p-3">There are no favorite courses yet, check <Link to="/courses" >Courses</Link> to view available courses</p>

    return (
        <div>
            <div className="dashboard-headers pt-4">
                <p>Favorite Courses <img style={{ width: "25px", height: "25px" }} src={FavoritesIcon} alt="user favorite programming courses" /></p>
                <div style={{ display: "flex" }}>
                    <Link to={dashboard_favorites}><p style={{ color: "red" }}>See All</p></Link>
                    <div style={{ width: "50px" }}></div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="dashboard-dots"></div>
                        <div className="dashboard-dots"></div>
                        <div className="dashboard-dots"></div>
                    </div>
                </div>
            </div>
            <div className="cards-container">
                {props.user.favorites.length === 0 ? noFavoriteCourse : favorites.slice(0, 2)}
            </div>
        </div>
    )
}

export default DashboardFavorites