import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    const {name} = course;
    return (
        <div>
            <p className='text-center text-4xl font-extrabold shadow-lg p-12 m-5'>Successfully Access For <span className='text-red-600 font-extrabold'>{name}</span> Course</p>
            
        </div>
    );
};

export default CheckOut;