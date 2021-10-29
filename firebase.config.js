// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6OoFKiV-LN5F6tbbOhRambuHjiJh5NBo",
    authDomain: "scoreboard-champs.firebaseapp.com",
    projectId: "scoreboard-champs",
    storageBucket: "scoreboard-champs.appspot.com",
    messagingSenderId: "29931289199",
    appId: "1:29931289199:web:9f6db90815dbc0efd4eb9a",
    measurementId: "G-P70EZQ76RY",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
