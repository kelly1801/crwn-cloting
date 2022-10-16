// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
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

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// set database, directly points to the db
export const crwnDb = getFirestore();

// create user

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
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
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export async function createAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}
export async function signInAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

// this function allow us to automaticallly set up  a collections and it's documents all at once instead of creating it one by one
// create collection, categories and add products
// collectionkey is a string we parse in to name the collection
// objects to add is a json file we provided to store the items on the database

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  // collectionRef creates a collection inside  the db with a name parsed in by us

  const collectionRef = collection(crwnDb, collectionKey);
  // the wite batch is the method that allow us to send all the data at once
  const batch = writeBatch(crwnDb);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    // SET the batch to add the objects inside a document referenced before

    batch.set(docRef, object);
  });
  // send to the database
  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(crwnDb, "Categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  const categorieMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categorieMap;
};
