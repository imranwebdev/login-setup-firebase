// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'
import { getDoc, setDoc, getFirestore, doc } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK7gr5mGIqt0L_DMtHGcmNHPwTmwUVXRc",
  authDomain: "testweb-91a5c.firebaseapp.com",
  projectId: "testweb-91a5c",
  storageBucket: "testweb-91a5c.appspot.com",
  messagingSenderId: "18702133175",
  appId: "1:18702133175:web:735d2ce1c3a8c6a2e12a32",
  measurementId: "G-WZWF54VJEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters(
  { prompt: "select_account" }
)

const auth = getAuth();

export const singInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {

  if (!userAuth) return;
  const userdoc = doc(db, 'user', userAuth.uid);
  const userSnapshot = await getDoc(userdoc)
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createDate = new Date();

    try {
      await setDoc(userdoc, { displayName, email, createDate, ...additionalInformation, })
    } catch (error) {
      console.log(error.message)
    }

  }

  return userdoc;
}


export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}
export const singInUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}

export const singOutUser = async () => signOut(auth)


export const authStateChageListener = (callback) => onAuthStateChanged(auth,callback);