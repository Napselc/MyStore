import { initializeApp } from "firebase/app"    // gives config object
import {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBsVsy8-Lh1dTCLVVej5WoRyBADPaE7D_4",
    authDomain: "triquetta-24116.firebaseapp.com",
    projectId: "triquetta-24116",
    storageBucket: "triquetta-24116.appspot.com",
    messagingSenderId: "73677562651",
    appId: "1:73677562651:web:47d35e5eb0dd3d5faa69be"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    propmt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)
  
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth, additionalInfo) => {

    if(!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid)
    console.log(userDocRef) 

    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()) {
      const {displayName, email} = userAuth;
      const createdAt = new Date()

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInfo
        })
      }catch(error) {
        console.log(error.message)
      }


    }

    return userDocRef

  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
  }


  
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
  }

 