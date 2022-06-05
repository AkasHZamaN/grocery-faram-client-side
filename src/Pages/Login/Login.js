import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import {toast} from 'react-toastify';
import axios from "axios";


const Login = () => {
    const [errorText, setErrorText] = useState('');
    const emailRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading  
      ] = useSignInWithEmailAndPassword(auth);

      if(user){
        navigate(from, { replace: true });
    }

    if(loading || sending){
        return <Loading></Loading>
    }

    const userLogin = async (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        if( password.length !== 8 ){
          setErrorText('Please Check Your Email && Password!!')
        }
        else{
          await signInWithEmailAndPassword(email, password)
        }

       const {data} = await axios.post('https://cryptic-bastion-13696.herokuapp.com/login', {email});
       localStorage.setItem('accessToken', data.accessToken);
    }
      // reset password link
    const resetPassword = async() =>{
      const email = emailRef.current.value;
      await sendPasswordResetEmail(email);
      if(email){
        toast('Please Check Your Email');
      }
      else{
        toast('Please Enter Your Email');
      }
    }

  return (
    <div style={{backgroundImage:"url('https://i.postimg.cc/65sRGkb3/add-banner-4.png')"}}>
      <div style={{backgroundColor:'#6A1B4D'}} className="w-75 mx-auto text-center rounded my-5 ">
        <img style={{height:'170px'}} src="https://i.postimg.cc/TPy4F034/grocery-farm-LOGO-1.png" alt="" />
        <form style={{fontFamily:'baloo2,cursive'}} onSubmit={userLogin}>
          <input
            ref={emailRef}
            className="w-75 mx-auto py-1 my-2 form-control border-success d-flex flex-column"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your email"
          />

          <input
            className="w-75 mx-auto py-1 my-2 form-control border-success d-flex flex-column"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
          />
          <p onClick={resetPassword} className="w-75 mx-auto text-start">
              <small style={{cursor:'pointer', color:'white', fontFamily:'baloo2, cursive'}}>Forget your password?</small>
          </p>

          <p className="text-white">{errorText}</p>
          
          <input
          style={{backgroundColor:'white',color:'#6A1B4D'}}
            className="w-25 border-0 fw-bold py-1 my-3 rounded "
            type="submit"
            value="Login"
          />
        </form>

        <p style={{fontFamily:'baloo2, cursive'}} className="py-2 text-white">
          Are you new user?
          <Link style={{color:'#E07C24'}} className="text-decoration-none ms-2" to={"/registration"}>
            Please create your account
          </Link>
        </p>
      </div>
      
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
