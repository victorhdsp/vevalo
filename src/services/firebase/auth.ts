import {  
  GoogleAuthProvider, 
  browserSessionPersistence, 
  createUserWithEmailAndPassword, 
  inMemoryPersistence, 
  setPersistence, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
} from "firebase/auth";

import { auth, currentUser } from "./index";

import { setCookie } from "@/assets/utils";

export const registerUser = (email:string, password:string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log('register: ', user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    })
}

export const loginUser = (email:string, password:string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('login: ', user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
}

export const loginGoogle = async () => {
  const provider = new GoogleAuthProvider();
  
  try {
    const signIn = await auth.setPersistence(browserSessionPersistence).then(
      () => signInWithPopup(auth, provider)
    )
    const accessToken = GoogleAuthProvider.credentialFromResult(signIn)?.accessToken;
  
    if (accessToken) {
      setCookie('token', accessToken, 2)
    }
    return currentUser()

  } catch (error) {
    console.log('error: ', error)
    return undefined
  }
}