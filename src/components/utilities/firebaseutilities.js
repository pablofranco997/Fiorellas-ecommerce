// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_MGXRvjtQCHeYIJQStCEpiFbbBdt31Ns",
  authDomain: "e-commerce-fiorellas.firebaseapp.com",
  projectId: "e-commerce-fiorellas",
  storageBucket: "e-commerce-fiorellas.appspot.com",
  messagingSenderId: "467679558536",
  appId: "1:467679558536:web:f6b36bc3122d0664f1d83d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
