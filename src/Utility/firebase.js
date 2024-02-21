
import firebase from "firebase/compat/app";
// auth
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCktrqg5TT9dekCHnEzd_ag-_ySyUmYBSA",
  authDomain: "clone-7d8bc.firebaseapp.com",
  projectId: "clone-7d8bc",
  storageBucket: "clone-7d8bc.appspot.com",
  messagingSenderId: "117012632440",
  appId: "1:117012632440:web:b49c31ad88d4eaedddae8d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
