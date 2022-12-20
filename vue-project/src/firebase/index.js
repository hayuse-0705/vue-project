// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"// TODO: Add SDKs for Firebase products that you want to use
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqe9JW-cfb-o2eTQunmp4dCmBE-AZ5EAI",
  authDomain: "realtime-chat-b3cde.firebaseapp.com",
  databaseURL: "https://realtime-chat-b3cde-default-rtdb.firebaseio.com",
  projectId: "realtime-chat-b3cde",
  storageBucket: "realtime-chat-b3cde.appspot.com",
  messagingSenderId: "147671925884",
  appId: "1:147671925884:web:94051c8a550440380ef5f9"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export{
    db,
    storage
}