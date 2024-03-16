import React from 'react'
import courses from "../constants";

const CourseCard = ({course}) => {
  return (
    <div class="card">
        <div class="card-logo">
        {course.icon}
        </div>

        <div class="card-heading">
            <h3>{course.name}</h3>
        </div>

        <div class="card-para">
            <p>{course.price}</p>
            <p>{course.dis}</p>
        </div>
    </div>
  )
}

export default CourseCard;