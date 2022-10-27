import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import SideNav from '../SideNav/SideNav';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <div className='grid grid-cols-3 gap-4 p-6 m-3'>
                <div className='bg-purple-300 p-8 m-5'>
                    <p className='text-center text-3xl font-bold mb-4'>Course Item</p>
                    {
                        
                        courses.map(course => <SideNav
                            key={course.id}
                            course={course}
                        ></SideNav>)
                    }
                </div>
                <div className='col-span-2'>
                    <div className='grid grid-cols-2 gap-7'>
                        {
                            courses.map(course => <Course
                                key={course.id}
                                course={course}
                            ></Course>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Courses;