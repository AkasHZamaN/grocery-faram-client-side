import { HomeIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section>
            <article className='w-50 mx-auto text-center'>
            <img className='w-100 mx-auto' src="https://i.postimg.cc/TYC72JYL/404not-Found.png" alt="" />
            <p className=' mb-5'>
            <Link style={{backgroundColor:'#6A1B4D'}} className='w-25 mx-auto text-decoration-none text-white p-2 rounded-3 fw-bold d-flex justify-content-center align-items-center ' to="/"> <HomeIcon style={{height:'25px', marginRight:'2px'}}></HomeIcon>Go Home Page</Link>
            </p>
            </article>
        </section>
    );
};

export default NotFound;