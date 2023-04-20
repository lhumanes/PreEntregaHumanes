import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDMZ9YqzRlMej6gESGa7caiMAKYfyId5fA",
  authDomain: "proyecto-ecommerce-humanes.firebaseapp.com",
  projectId: "proyecto-ecommerce-humanes",
  storageBucket: "proyecto-ecommerce-humanes.appspot.com",
  messagingSenderId: "783372157324",
  appId: "1:783372157324:web:59f4d4445d5ee241ad56a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);