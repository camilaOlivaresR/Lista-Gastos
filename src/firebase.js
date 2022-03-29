import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


const firebaseConfig = {
  apiKey: "AIzaSyDICwPS6_bsZSA8QinACdt9nJNDzGgAOKE",
  authDomain: "lista-gastos-app.firebaseapp.com",
  projectId: "lista-gastos-app",
  storageBucket: "lista-gastos-app.appspot.com",
  messagingSenderId: "510113046726",
  appId: "1:510113046726:web:1bca2ef011a3869dcfb7c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();