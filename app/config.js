// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "fir-auth-6444e.firebaseapp.com",
  projectId: "fir-auth-6444e",
  storageBucket: "fir-auth-6444e.appspot.com",
  messagingSenderId: "448873792522",
  appId: process.env.NEXT_PUBLIC_APP_ID,
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
export { app }
