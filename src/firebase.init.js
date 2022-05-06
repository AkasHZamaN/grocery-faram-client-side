// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyD_Cn5QL0h3UfUTXkq5TomSC6ejdQTe_qY",
  authDomain: "grocery-farm-ff36c.firebaseapp.com",
  projectId: "grocery-farm-ff36c",
  storageBucket: "grocery-farm-ff36c.appspot.com",
  messagingSenderId: "688097761101",
  appId: "1:688097761101:web:1f2c8224f3df10b3b88904"

  // env file avabe korar pore project run kore na. error dekhay... invalid firebase key show kore aro onek kichu dekhaise 4 bar try korlam but problem ta bujtam na. 


  /*  apiKey:process.env.REACT_APP_apiKey,
   authDomain:process.env.REACT_APP_authDomain,
   projectId:process.env.REACT_APP_projectId,
   storageBucket:process.env.REACT_APP_storageBucket,
   messagingSenderId:process.env.REACT_APP_messagingSenderId,
   appId:process.env.REACT_APP_appId,
   
   */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;