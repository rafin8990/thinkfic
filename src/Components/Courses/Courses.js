import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CourseDetails from '../../CoursesDetails/CourseDetails';
import Zoom from 'react-reveal/Zoom';

const Courses = () => {
    const [courses, setCourses]=useState([])
    console.log(courses)

    useEffect(()=>{
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div>
            <div>
                <Zoom>
                <h1 className='font-bold text-4xl text-secondary text-center mt-20'>Here Is Our All Courses</h1>
                </Zoom>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2, lg:grid-cols-4 gap-5 lg:mx-10 mt-20'>
                {
                    courses.map(course=><CourseDetails
                    key={course._id}
                    course={course}
                    ></CourseDetails>)
                }
            </div>
        </div>
    );
};

export default Courses;