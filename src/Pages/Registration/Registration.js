import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Registration = () => {
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();
  const [updateProfile] = useUpdateProfile(auth);
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';
  
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const userRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password.length && confirmPassword.length !== 8) {
      setErrorText(`Password must be 8 character check again !!`);
    }
    else{
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }
  };

  if (user) {
    console.log("user", user);
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div style={{backgroundImage:"url('https://i.postimg.cc/65sRGkb3/add-banner-4.png')"}}>
      <div style={{fontFamily:'baloo2,cursive',backgroundColor:'#6A1B4D'}} className="w-75 mx-auto text-center rounded my-5 ">
      <img style={{height:'170px'}} src="https://i.postimg.cc/TPy4F034/grocery-farm-LOGO-1.png" alt="" />
        <form onSubmit={userRegister}>
          <input
            className="w-75 mx-auto py-1 my-2 form-control border-success d-flex flex-column"
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
          />

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
          <input
            className="w-75 mx-auto py-1 my-2 form-control border-success d-flex flex-column"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Enter Confirm Password"
          />

          <p style={{fontFamily:'baloo2,cursive'}} className="text-white">{errorText}</p>
          <input
          style={{color:'#6A1B4D'}}
            className="w-25 border-0 bg-white fw-bold py-1 my-3 rounded"
            type="submit"
            value="Register"
          />
        </form>
        <p className="my-2 py-2 text-white">
          Already have an account?
          <Link style={{color:'#E07C24'}} className="text-decoration-none ms-2" to={"/login"}>
            Please login
          </Link>
        </p>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Registration;
