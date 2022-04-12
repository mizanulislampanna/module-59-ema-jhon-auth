// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBbLhujWlgEAhW_fusFb30DkAhK7GPHOs",
  authDomain: "module-59-creat-a-new-project.firebaseapp.com",
  projectId: "module-59-creat-a-new-project",
  storageBucket: "module-59-creat-a-new-project.appspot.com",
  messagingSenderId: "850618290578",
  appId: "1:850618290578:web:1d4d097c288c6725b2714b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
