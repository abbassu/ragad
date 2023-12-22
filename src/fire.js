import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from "firebase/app";
import "firebase/database";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyBXfmK5ba8kkfqZtYB8EcD33HZsndN6jTE",
  authDomain: "web-project-3cf62.firebaseapp.com",
  projectId: "web-project-3cf62",
  storageBucket: "web-project-3cf62.appspot.com",
  messagingSenderId: "308218257202",
  appId: "1:308218257202:web:76518b9d7b6b39bd2e012b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Get a list of cities from your database
export async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

console.log("ffffffffffffffffffff", getCities(db));
