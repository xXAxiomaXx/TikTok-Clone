import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1eUbYU3pOwlKPMLtanSi4KqmzHSRGJlA",
  authDomain: "tiktok-clone-ddf60.firebaseapp.com",
  projectId: "tiktok-clone-ddf60",
  storageBucket: "tiktok-clone-ddf60.appspot.com",
  messagingSenderId: "46156315482",
  appId: "1:46156315482:web:3c1efc609ccfb22afb1163"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;