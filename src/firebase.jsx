/** @format */

// Import the functions you need from the SDKs you need
// new upadates
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdLiWCl2I_oIYZvNNwTqcupmyMhOgkplA",
    authDomain: "new-2024-efd48.firebaseapp.com",
    projectId: "new-2024-efd48",
    storageBucket: "new-2024-efd48.appspot.com",
    messagingSenderId: "153461884896",
    appId: "1:153461884896:web:90f405862b129315e2cd85",
    measurementId: "G-WME54YEMCL",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db };
