// -------------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwf_KGcVgY9XjXAGc3AvdZpHzsKWSVGxw",
  authDomain: "fir-auth-2f80e.firebaseapp.com",
  projectId: "fir-auth-2f80e",
  storageBucket: "fir-auth-2f80e.appspot.com",
  messagingSenderId: "822505684078",
  appId: "1:822505684078:web:edf0e780cd07e5f262fa7f",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export { app }
