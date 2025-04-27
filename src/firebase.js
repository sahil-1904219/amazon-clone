// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyDh450GHkIDy_ULQfZ8_3H0WgOzD7X2EuE",
//   authDomain: "clone-70cf1.firebaseapp.com",
//   projectId: "clone-70cf1",
//   storageBucket: "clone-70cf1.firebasestorage.app",
//   messagingSenderId: "922821300194",
//   appId: "1:922821300194:web:4f5b7a61cbfda8807bf3bb",
//   measurementId: "G-HGJ3W981GE",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const auth = firebase.auth();
// export { db, auth };
// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDh450GHkIDy_ULQfZ8_3H0WgOzD7X2EuE",
  authDomain: "clone-70cf1.firebaseapp.com",
  projectId: "clone-70cf1",
  storageBucket: "clone-70cf1.appspot.com", // fixed small typo here also
  messagingSenderId: "922821300194",
  appId: "1:922821300194:web:4f5b7a61cbfda8807bf3bb",
  measurementId: "G-HGJ3W981GE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
