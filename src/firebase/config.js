// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOI0ozDTYAf1elCyhAZNYwgosHiqUuhU4",
  authDomain: "journalapp-reactjs-87764.firebaseapp.com",
  projectId: "journalapp-reactjs-87764",
  storageBucket: "journalapp-reactjs-87764.appspot.com",
  messagingSenderId: "118860698956",
  appId: "1:118860698956:web:46c7e671b5a441a5a2ebe9"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );