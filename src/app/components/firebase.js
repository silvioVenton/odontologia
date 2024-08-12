// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUXsyWgLH1Vrpf48HN-BcPFbZ4BJI1bIA",
  authDomain: "odontobarao-86b9c.firebaseapp.com",
  databaseURL: "https://odontobarao-86b9c-default-rtdb.firebaseio.com",
  projectId: "odontobarao-86b9c",
  storageBucket: "odontobarao-86b9c.appspot.com",
  messagingSenderId: "269313287655",
  appId: "1:269313287655:web:5f660448300fd880988942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }
export default app