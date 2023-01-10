// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2t_RwNywrxsNDt2m6eeNHPn53-OSZ67s",
  authDomain: "thinkfic.firebaseapp.com",
  projectId: "thinkfic",
  storageBucket: "thinkfic.appspot.com",
  messagingSenderId: "1091683927253",
  appId: "1:1091683927253:web:0e32b2c3dfba7577450e5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;