import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {id, name, Image , Description, price} = course; 
    return (
        <div>
            <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-2xl">
                <div className="sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                        <a href="/" aria-label="Article">
                            <img
                                src={Image}
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        </a>
                        <div className="py-5">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-2xl font-bold leading-5">{name}</p>
                            </a>
                            <p className="mb-4 text-gray-700">
                               {Description.slice(0, 200) + "...."}
                            </p>
                            <p className='text-md font-bold'>Course Fee : {price}</p>
                            <div>
                               <Link to={`/courses/${id}`}> <button className='bg-green-300 mt-5 px-8 py-4 rounded-lg text-lg font-semibold'>View Details About Course</button></Link>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Course;