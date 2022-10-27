import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({ course }) => {
    const { name } = course;
    return (
        <div>
            <Link to={`/courses/${course.id}`}>
                <p className='my-3 bg-purple-500 text-white text-center lg:text-xl p-3'>
                    {name}
                </p>
            </Link>
        </div>
    );
};

export default SideNav;