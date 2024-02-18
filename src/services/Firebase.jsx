// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAzruZlfhI56jb2VM6zO-sP7fgWV8YzWs",
    authDomain: "guitarstore-edff0.firebaseapp.com",
    projectId: "guitarstore-edff0",
    storageBucket: "guitarstore-edff0.appspot.com",
    messagingSenderId: "1068725552625",
    appId: "1:1068725552625:web:08fbc1df7faac8fe8f7050"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;