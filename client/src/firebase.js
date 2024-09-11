
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
    // apiKey: "AIzaSyDllK5udsodsmUaC0c4hbxYLaFdsuokp9s",
    // authDomain: "login-bbf80.firebaseapp.com",
    // projectId: "login-bbf80",
    // storageBucket: "login-bbf80.appspot.com",
    // messagingSenderId: "658888120344",
    // appId: "1:658888120344:web:2310782d385135321fcb6d",
    // measurementId: "G-D68X1E6S0M"
//     apiKey: "AIzaSyCdWhvQR8iw5Hxo-motB7fyRpBuvK5sztg",
//     authDomain: "ecommercelogin-19fbf.firebaseapp.com",
//     projectId: "ecommercelogin-19fbf",
//     storageBucket: "ecommercelogin-19fbf.appspot.com",
//     messagingSenderId: "737177233235",
//     appId: "1:737177233235:web:c03cd1a164e8dc826be3a6",
//     measurementId: "G-C06S0MKM61"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };
// import * as firebase from "firebase";

// // Your web app's Firebase configuration
// const firebaseConfig = {
    // apiKey: "AIzaSyCdWhvQR8iw5Hxo-motB7fyRpBuvK5sztg",
    //     authDomain: "ecommercelogin-19fbf.firebaseapp.com",
    //     projectId: "ecommercelogin-19fbf",
    //     storageBucket: "ecommercelogin-19fbf.appspot.com",
    //     messagingSenderId: "737177233235",
    //     appId: "1:737177233235:web:c03cd1a164e8dc826be3a6",
    //     measurementId: "G-C06S0MKM61"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // export
// export const auth = firebase.auth();
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// firebase.js

// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// const firebaseConfig = {
//         apiKey: "AIzaSyCdWhvQR8iw5Hxo-motB7fyRpBuvK5sztg",
//         authDomain: "ecommercelogin-19fbf.firebaseapp.com",
//         projectId: "ecommercelogin-19fbf",
//         storageBucket: "ecommercelogin-19fbf.appspot.com",
//         messagingSenderId: "737177233235",
//         measurementId: "G-C06S0MKM61",
//         appId: "1:737177233235:web:c03cd1a164e8dc826be3a6",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const googleAuthProvider = new GoogleAuthProvider();

// export { auth, googleAuthProvider };
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; // Import GoogleAuthProvider

const firebaseConfig = {
    apiKey: "AIzaSyCdWhvQR8iw5Hxo-motB7fyRpBuvK5sztg",
    authDomain: "ecommercelogin-19fbf.firebaseapp.com",
    projectId: "ecommercelogin-19fbf",
    storageBucket: "ecommercelogin-19fbf.appspot.com",
    messagingSenderId: "737177233235",
    measurementId: "G-C06S0MKM61",
    appId: "1:737177233235:web:c03cd1a164e8dc826be3a6",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleAuthProvider = new GoogleAuthProvider(); // Export Google Auth Provider
