import React from 'react';
import courses from "../constants";
import CourseCard from './CourseCard';

const Courses = () => {
    console.log(courses);
  return (
        <div className="services-section" id="courses">
            <div className="card-sec">
                {courses.map((course) => {
                    return <CourseCard course={course}/>
                })}
            </div>
        </div>  

  )
}

export default Courses