
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDllK5udsodsmUaC0c4hbxYLaFdsuokp9s",
    authDomain: "login-bbf80.firebaseapp.com",
    projectId: "login-bbf80",
    storageBucket: "login-bbf80.appspot.com",
    messagingSenderId: "658888120344",
    appId: "1:658888120344:web:2310782d385135321fcb6d",
    measurementId: "G-D68X1E6S0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
