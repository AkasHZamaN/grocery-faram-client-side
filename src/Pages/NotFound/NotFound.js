import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section>
            <article className='w-50 mx-auto text-center'>
            <img className='w-100 mx-auto' src="https://i.postimg.cc/TYC72JYL/404not-Found.png" alt="" />
            <p >
            <Link className='text-decoration-none bg-success text-white p-2 rounded-3 fw-bold' to="/">Go Home Page</Link>
            </p>
            </article>
        </section>
    );
};

export default NotFound;