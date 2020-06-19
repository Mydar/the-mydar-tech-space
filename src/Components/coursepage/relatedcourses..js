import React, { useState, useEffect } from 'react'
import Card from '../Courses/card'
import { connect } from 'react-redux'
import { Carousel } from 'react-bootstrap'


function RelatedCourses(props) {
    const courses = props.courses.filter((course) => course.id !== props.course.id)
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <Card
                            cardObj={courses[0]}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card
                            cardObj={courses[1]}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card
                            cardObj={courses[2]}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card
                            cardObj={courses[3]}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card
                            cardObj={courses[4]}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card
                            cardObj={courses[5]}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card
                            cardObj={courses[6]}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card
                            cardObj={courses[7]}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

const matchStateToProps = (state) => {
    return {
        courses: state.courses,
        course: state.coursepage
    }
}
export default connect(matchStateToProps)(RelatedCourses)