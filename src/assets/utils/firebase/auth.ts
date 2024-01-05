import { 
  getAuth, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  Auth
} from "firebase/auth";

import { setCookie } from "@/assets/utils";

let auth:Auth | undefined = undefined
let google:GoogleAuthProvider | undefined = undefined

export const PopuleAuthAndProvider = () => {
  auth = getAuth();
  google = new GoogleAuthProvider();
}

export const registerUser = (email:string, password:string) => {
  if (!auth) return

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
  if (!auth) return

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

export const loginGoogle = () => {
  console.log(auth)
  if (!auth || !google) return

  signInWithPopup(auth, google)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const email = result.user.email;

      if (token && email) {
        setCookie('token', token, 2)
        setCookie('email', email, 2)
        window.location.href = "/"
      }
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    })
}