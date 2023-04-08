import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCzlgj89Y5nalRqNKtwIaYGdr0F65CONe8",
    authDomain: "tender-management-222c8.firebaseapp.com",
    projectId: "tender-management-222c8",
    storageBucket: "tender-management-222c8.appspot.com",
    messagingSenderId: "795669156045",
    appId: "1:795669156045:web:cf624fa4c49d50e79c1984"
  
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const authorization = getAuth(app)
export {db, authorization} ;