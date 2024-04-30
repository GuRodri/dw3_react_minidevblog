import { initializeApp } from "firebase/app";
import { getAnalytics, initializeAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBnXHfP4v0-voNiPg9fVAHd5bK1YVJLuzI",
    authDomain: "minidevblogcarlos.firebaseapp.com",
    projectId: "minidevblogcarlos",
    storageBucket: "minidevblogcarlos.appspot.com",
    messagingSenderId: "1038900120882",
    appId: "1:1038900120882:web:b18ce6c14a2bbaded39b2b",
    measurementId: "G-X0XXBTMF87"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export { db }