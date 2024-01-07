import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { PopuleAuthAndProvider } from './auth';

const firebaseConfig = {
  apiKey: "AIzaSyCGx5nHg65n83deSZ582rF8FiKpccIl0ko",
  authDomain: "getvalue-827e7.firebaseapp.com",
  databaseURL: "https://getvalue-827e7-default-rtdb.firebaseio.com",
  projectId: "getvalue-827e7",
  storageBucket: "getvalue-827e7.appspot.com",
  messagingSenderId: "1075077714912",
  appId: "1:1075077714912:web:4b5fa5fb2fa843aa7c9185",
  measurementId: "G-0D1BCF5L6H"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);


const execute = () => {
  PopuleAuthAndProvider()
}

export default execute