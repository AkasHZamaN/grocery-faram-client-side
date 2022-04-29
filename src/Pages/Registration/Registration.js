import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Registration = () => {
    const [errorText, setErrorText] = useState('');
    const navigate = useNavigate();
    const [updateProfile] = useUpdateProfile(auth)

    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    
    if(user){
        console.log('user', user);
    }
    
    if(loading){
        return <Loading></Loading>;
    }

    const userRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        
        if(password === confirmPassword){
            setErrorText(`Doesn't Match Your Password Please Check!!`)
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name})
        navigate('/');   
    }
    return (
        <div>
            <div className='w-75 mx-auto text-center bg-success bg-opacity-50 rounded my-5 '>
                <h3 className='text-success py-2'>Grocery Farm Registration</h3>
                <form onSubmit={userRegister}>
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
                    name="confirmPassword" 
                    id="confirmPassword" 
                    placeholder='Enter Confirm Password'/>

                    <p className='text-warning'>
                        {errorText}
                    </p>
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