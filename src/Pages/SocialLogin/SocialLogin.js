import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";


const SocialLogin = () => {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');
  const location = useLocation();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let from = location?.state?.from?.pathname || '/';


  if(user){
      // console.log('user', user);
      navigate(from, { replace: true });
  }
  if(loading){
      return <Loading></Loading>;
  }
  
  if(error){
    setErrorText('Please try again & check your connection!!');
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{
            height: "2px",
            width: "250px",
            backgroundColor: "lightgray",
          }}
        ></div>
        <p className="mx-2">or</p>
        <div
          style={{
            height: "1px",
            width: "250px",
            backgroundColor: "lightgray",
          }}
        ></div>
      </div>

        <p>
            {errorText}
        </p>
        <div className="w-50 mx-auto">
                <Button
                    
                    onClick={() => signInWithGoogle()}
                    className="bg-success opacity-75 border-0 text-white py-1 fw-bold rounded-3 w-100 mx-auto my-3 d-flex justify-content-center align-items-center"
                    variant="outline-success"
                    >
                    <img
                    style={{ height: "25px", marginRight: "5px" }}
                    src="https://i.postimg.cc/vm8SRjv1/google-1.png"
                    alt=""
                    />
                    Google Sign In
                </Button>
            
        </div>
    </div>
  );
};

export default SocialLogin;
