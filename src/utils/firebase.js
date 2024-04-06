// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwd4umDOzcw6ZAHfuMn4yp6Z39dkuZI2w",
  authDomain: "netflixgpt-768cc.firebaseapp.com",
  databaseURL: "https://netflixgpt-768cc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflixgpt-768cc",
  storageBucket: "netflixgpt-768cc.appspot.com",
  messagingSenderId: "973642816188",
  appId: "1:973642816188:web:bd14d6e29adc01b9038eb9",
  measurementId: "G-03VWJHTXRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth= getAuth();
export default auth;
