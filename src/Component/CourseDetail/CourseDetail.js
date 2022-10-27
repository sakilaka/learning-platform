import React from 'react';
import Pdf from "react-to-pdf";
import { Link, useLoaderData } from 'react-router-dom';

const ref = React.createRef();

const CourseDetail = () => {
    const course = useLoaderData();
    console.log(course);
    const { id, name, Image, price, Description, Instructor, Duration, Enroll } = course;
    return (
        <div id='root'>

            <div ref={ref} className="px-4 w-9/12 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-2xl container">
                <div className="sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                        <a href="/" aria-label="Article">
                            <img
                                src={Image}
                                className="object-cover w-7/12 h-7/12 p-5 mx-auto rounded"
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
                                {Description}
                            </p>
                            <p className='text-md mb-4 text-red-600 font-bold'>Course Fee : {price}</p>
                            <p className='text-md mb-4 text-indigo-600 font-bold'>Instructor name : {Instructor}</p>
                            <p className='text-md mb-4 font-bold'>Already Enrolled : {Enroll}</p>
                            <p className='text-md'>Duration: {Duration}</p>
                            <div>
                                <Link to={`/checkout/${id}`}>
                                    <button className='mt-5 px-8 py-4 rounded-lg text-lg font-semibold bg-teal-300 mr-6'>Get Premium Access</button>
                                </Link>
                                <Link to='/courses'>
                                    <button className='mt-5 px-8 py-4 rounded-lg text-lg font-semibold bg-blue-300 mr-6'>View all Course</button>
                                </Link>
                                <Pdf targetRef={ref} filename="Course-details.pdf">
                                    {({ toPdf }) =>  <button onClick={toPdf} className='mt-5 px-8 py-4 rounded-lg text-lg font-semibold bg-yellow-300 mr-6'>Download PDF</button>}
                                </Pdf>

                            

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseDetail;