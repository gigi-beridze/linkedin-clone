// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import firebase from "firebase";

// // Follow this pattern to import other Firebase services
// // import { } from 'firebase/<service>';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDVD2PqbiKWyw7r9kxfp5diLpRE6WfVwiM",
//     authDomain: "linkedin-clone-f56fe.firebaseapp.com",
//     projectId: "linkedin-clone-f56fe",
//     storageBucket: "linkedin-clone-f56fe.appspot.com",
//     messagingSenderId: "957303406261",
//     appId: "1:957303406261:web:4bcab66036ba84974988fc",
//     measurementId: "G-X0HJ7GCWT3"
//   };
  
//   const app = initializeApp(firebaseConfig);
//   const db = getFirestore(app);

// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;

//   // Get a list of cities from your database

//   async function getCities(db) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
// }