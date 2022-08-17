import { initializeApp } from 'firebase/app';

import { getAuth } from "firebase/auth";

import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDb5s6OUefEFQp8KECvWYbQOHLhDIAFOUE",
    authDomain: "react-my-pets-workshop.firebaseapp.com",
    projectId: "react-my-pets-workshop",
    storageBucket: "react-my-pets-workshop.appspot.com",
    messagingSenderId: "531708109621",
    appId: "1:531708109621:web:fcd7f71d6531a07545e27c"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);