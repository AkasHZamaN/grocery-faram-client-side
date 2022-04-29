import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <div className='w-75 mx-auto text-center bg-success bg-opacity-50 rounded my-5 '>
                <h3 className='text-success py-2'>Grocery Farm Registration</h3>
                <form >
                    <input 
                    className='w-75 mx-auto py-1 my-2 form-control border-success d-flex flex-column'
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder='Enter Your Name'/>

                    <input 
                    className='w-75 mx-auto py-1 my-2 form-control border-success d-flex flex-column'
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder='Enter Your email'/>

                    <input 
                    className='w-75 mx-auto py-1 my-2 form-control border-success d-flex flex-column'
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder='Enter Your Password'/>
                    <input 
                    className='w-75 mx-auto py-1 my-2 form-control border-success d-flex flex-column'
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder='Enter Confirm Password'/>

                    <input className='w-25 border-0 text-white py-1 rounded bg-success' type="submit" value="Register" />
                </form>
                <p className='my-2 text-white'>
                    Already have an account? 
                    <Link className='text-decoration-none ms-2' to={'/login'}>
                         Please login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Registration;