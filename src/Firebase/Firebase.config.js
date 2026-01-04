// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7DeV3tQ9CxWlDHKHwoM4uz8mLf5SNnBc",
  authDomain: "my-assignment-no-09.firebaseapp.com",
  projectId: "my-assignment-no-09",
  storageBucket: "my-assignment-no-09.firebasestorage.app",
  messagingSenderId: "475175051108",
  appId: "1:475175051108:web:e52f751850a10673162471",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
