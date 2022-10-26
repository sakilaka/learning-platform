import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    const {id, name, image} = courses;
    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>
                <div className=''>
                    <p>{courses.length}</p>
                </div>
                <div className='col-span-2'>

                </div>

            </div>
        </div>
    );
};

export default Courses;