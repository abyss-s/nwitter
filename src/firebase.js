import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCnsBF6q9QtsyU8lCjCuX-PpPCZn-UB4q4",
    authDomain: "nwitter-3d261.firebaseapp.com",
    projectId: "nwitter-3d261",
    storageBucket: "nwitter-3d261.appspot.com",
    messagingSenderId: "345125713552",
    appId: "1:345125713552:web:d32440a4779595484fca15"
};

export default firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();