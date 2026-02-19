
import { initializeApp } from "firebase/app";
//! Authentication services from firebase
import { getAuth } from "firebase/auth";

//! Database services from firebasa
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb0LQRilOEPFhCudmyZAcC3bCC2lpmCyA",
  authDomain: "music-application-b4c11.firebaseapp.com",
  projectId: "music-application-b4c11",
  storageBucket: "music-application-b4c11.firebasestorage.app",
  messagingSenderId: "721085934709",
  appId: "1:721085934709:web:90f18914f317b0b69a5c3c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export let __AUTH =getAuth(firebaseApp);
export let __DB =getFirestore(firebaseApp);

export default firebaseApp;