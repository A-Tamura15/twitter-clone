import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUMOKawzRSMNI6AT97xLBRRHk4RSbjqT4",
  authDomain: "twitter-clone-372d9.firebaseapp.com",
  projectId: "twitter-clone-372d9",
  storageBucket: "twitter-clone-372d9.appspot.com",
  messagingSenderId: "81210676996",
  appId: "1:81210676996:web:6e39172e0fd096b47ee251",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
