import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxfrWcuU-5dkkU04HNlU6e619EkNH7frU",
  authDomain: "proyecto-react-coderhous-f00b4.firebaseapp.com",
  projectId: "proyecto-react-coderhous-f00b4",
  storageBucket: "proyecto-react-coderhous-f00b4.appspot.com",
  messagingSenderId: "1095380415701",
  appId: "1:1095380415701:web:c233073230d342ee2f5e5c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
