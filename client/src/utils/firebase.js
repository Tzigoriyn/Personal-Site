import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyC9nyWy0qm6hBW0sliTGwhb3NvHxPEuFCw",
    authDomain: "personal-site-project-6b514.firebaseapp.com",
    databaseURL: "https://personal-site-project-6b514-default-rtdb.firebaseio.com",
    projectId: "personal-site-project-6b514",
    storageBucket: "personal-site-project-6b514.appspot.com",
    messagingSenderId: "1009209684419",
    appId: "1:1009209684419:web:68d77a173bba4c02f74d76"
};



export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const database = getDatabase();

export const storage = getStorage(app);