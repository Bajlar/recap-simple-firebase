// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC-zIKzGV-wL6ZJpA3ZMukcOAXWgqf1dk",
  authDomain: "recap-simple-firebase-ac400.firebaseapp.com",
  projectId: "recap-simple-firebase-ac400",
  storageBucket: "recap-simple-firebase-ac400.appspot.com",
  messagingSenderId: "234752903881",
  appId: "1:234752903881:web:df4931d2404b7ff1b89b18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;