// Import the functions you need from the SDKs you need

import { getApp, getApps, initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyA7Q7JcpjMP79HHwcPjxdcSPSZ812INt9A",
    authDomain: "mock-mate-f34e7.firebaseapp.com",
    projectId: "mock-mate-f34e7",
    storageBucket: "mock-mate-f34e7.firebasestorage.app",
    messagingSenderId: "37088485087",
    appId: "1:37088485087:web:82e580a1030244bc9bd36a",
    measurementId: "G-KJBWPW50Y1"
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
