// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAcVe_FDLa2fBGOk2FCPUSIQrooUENVj40",
  authDomain: "crwn-clothing-db-b55ce.firebaseapp.com",
  projectId: "crwn-clothing-db-b55ce",
  storageBucket: "crwn-clothing-db-b55ce.appspot.com",
  messagingSenderId: "1048059287010",
  appId: "1:1048059287010:web:5653f4488f0ee8301295bb",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// set database, directly points to the db
export const crwnDb = getFirestore();

// create user

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(crwnDb, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
