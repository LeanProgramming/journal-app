// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4KMxNGeiJJ2eu2rbqnZkfCg2I56dTPN8",
  authDomain: "react-cursos-e7622.firebaseapp.com",
  projectId: "react-cursos-e7622",
  storageBucket: "react-cursos-e7622.appspot.com",
  messagingSenderId: "671272194422",
  appId: "1:671272194422:web:3273f6c6a25de812956a57"
};

// Initialize Firebase
export const FireBaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FireBaseApp );
export const FirebaseDB = getFirestore( FireBaseApp );