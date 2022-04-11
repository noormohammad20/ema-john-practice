import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyA8ru14BfD8e4aARtsTVdgS3V3s98XvzXA",
    authDomain: "ema-john-practice-beec6.firebaseapp.com",
    projectId: "ema-john-practice-beec6",
    storageBucket: "ema-john-practice-beec6.appspot.com",
    messagingSenderId: "1004372041620",
    appId: "1:1004372041620:web:27348af075067af7df3981"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default auth