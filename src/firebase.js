import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD63eIeU8sYwkVjuTJGluvOn12xa5MtHR0",
    authDomain: "clone-192b2.firebaseapp.com",
    projectId: "clone-192b2",
    storageBucket: "clone-192b2.appspot.com",
    messagingSenderId: "407845303569",
    appId: "1:407845303569:web:e8e32814c36b1096ecc8b0",
    measurementId: "G-Y3Z3HY2KJL"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };