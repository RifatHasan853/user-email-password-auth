// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_viFxnEDk2UM81Va8_FJewR4NftDUgkA",
  authDomain: "user-email-password-auth-92d99.firebaseapp.com",
  projectId: "user-email-password-auth-92d99",
  storageBucket: "user-email-password-auth-92d99.appspot.com",
  messagingSenderId: "704345119987",
  appId: "1:704345119987:web:4e20b3729b3955c3d96b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;