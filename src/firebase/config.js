import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyATSP5NopXKrR19fs2mgEgth9tqAaDTKaw",
  authDomain: "gem-hub.firebaseapp.com",
  projectId: "gem-hub",
  storageBucket: "gem-hub.appspot.com",
  messagingSenderId: "407926553267",
  appId: "1:407926553267:web:ccae389e19f28446d34ec6"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
export {db, auth} ;