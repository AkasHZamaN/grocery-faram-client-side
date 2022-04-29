import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Loading from "../Loading/Loading";

const Login = () => {
    const [errorText, setErrorText] = useState('');
    const navigate = useNavigate();


    const [
        signInWithEmailAndPassword,
        user,
        loading  
      ] = useSignInWithEmailAndPassword(auth);

    const userLogin = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

       signInWithEmailAndPassword(email, password)
       .catch(
           setErrorText('Please Check Your Email && Password!!')
       )
    }
    if(user){
        navigate('/')
    }

    if(loading){
        return <Loading></Loading>
    }

  return (
    <div>
      <div className="w-75 mx-auto text-center bg-success bg-opacity-50 rounded my-5 ">
        <h3 className="text-success py-2">Grocery Farm Login</h3>
        <form onSubmit={userLogin}>
          <input
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
          <p className="w-75 mx-auto text-start">
              <small style={{cursor:'pointer', color:'blue'}}>Forget your password?</small>
          </p>
          <p className="text-warning">{errorText}</p>
          <input
            className="w-25 border-0 text-white py-1 my-3 rounded bg-success"
            type="submit"
            value="Login"
          />
        </form>
        <p className="py-2 text-white">
          Are you new user?
          <Link className="text-decoration-none ms-2" to={"/registration"}>
            Please create your account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
