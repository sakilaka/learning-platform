import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <div className='grid grid-cols-3 gap-4 p-6 m-3'>
                <div className='bg-purple-300 p-8 m-5'>
                    <p className='text-center text-3xl font-bold mb-4'>Course Item</p>
                    {
                        courses.map(course => <p className='my-3 bg-purple-500 text-white text-center text-xl p-3'>{course.name}</p>)
                    }
                </div>
                <div className='col-span-2'>
                    {
                        courses.map(course => <Course 
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Courses;