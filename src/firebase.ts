import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCbNMB8LLDMX2-d-0SzQX1cy7RcUU-YM0A",
    authDomain: "basic-chat-app-f3dff.firebaseapp.com",
    databaseURL: "https://basic-chat-app-f3dff-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "basic-chat-app-f3dff",
    storageBucket: "basic-chat-app-f3dff.appspot.com",
    messagingSenderId: "281909565568",
    appId: "1:281909565568:web:417129eeff2d848a58ee65",
    measurementId: "G-QD0M272WJ1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };