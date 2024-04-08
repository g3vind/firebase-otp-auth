// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRV8A1jquNG_rtHA655OXD-lbX0CNGFik",
  authDomain: "fir-auth-6444e.firebaseapp.com",
  projectId: "fir-auth-6444e",
  storageBucket: "fir-auth-6444e.appspot.com",
  messagingSenderId: "448873792522",
  appId: "1:448873792522:web:ea66bcb96c550a6bddcbf3",
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
export { app }
