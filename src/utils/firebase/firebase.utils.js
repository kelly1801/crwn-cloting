// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
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
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

// set database, directly points to the db
export const crwnDb = getFirestore();

// create user

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  if(!userAuth) return
  const userDocRef = doc(crwnDb, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export async function createAuthUserWithEmailAndPassword(email, password){
if(!email || !password) return

return await createUserWithEmailAndPassword(auth, email, password)
}