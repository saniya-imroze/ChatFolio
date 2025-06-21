// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyDlUlL2uVyLNfWi7lfug3yDVjgTkyVxHoc",
  authDomain: "chatfolio-3fef1.firebaseapp.com",
  projectId: "chatfolio-3fef1",
  storageBucket: "chatfolio-3fef1.appspot.com",
  messagingSenderId: "190243757000",
  appId: "1:190243757000:web:5eda6207d9ebe3d67f7efd"
};

const app = initializeApp(firebaseConfig);
export const functions = getFunctions(app, "us-central1");

if (import.meta.env.DEV) {
    connectFunctionsEmulator(functions, "localhost", 5001);
}
