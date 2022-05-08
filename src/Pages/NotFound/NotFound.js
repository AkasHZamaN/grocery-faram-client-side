import { HomeIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section style={{backgroundImage:"url('https://i.postimg.cc/65sRGkb3/add-banner-4.png')"}}>
            <article className='w-50 mx-auto text-center'>
            <img className='w-100 mx-auto' src="https://i.postimg.cc/s2S4M55B/404not-Found-2.png" alt="" />
            <p className=' pb-5'>
            <Link style={{backgroundColor:'#6A1B4D'}} className='w-25 mx-auto text-decoration-none text-white p-2 rounded-3 fw-bold d-flex justify-content-center align-items-center ' to="/"> <HomeIcon style={{height:'25px', marginRight:'2px'}}></HomeIcon>Go Home Page</Link>
            </p>
            </article>
        </section>
    );
};

export default NotFound;