// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRxqqqzFzyS-bFNA0Xr28Du3RkpjtxMIg",
    authDomain: "book-management-bc8d6.firebaseapp.com",
    projectId: "book-management-bc8d6",
    storageBucket: "book-management-bc8d6.appspot.com",
    messagingSenderId: "330912373106",
    appId: "1:330912373106:web:b4424f94a06b16726565eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app