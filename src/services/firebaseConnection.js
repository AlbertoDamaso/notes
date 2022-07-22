import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD7yGYg481bKrnnMxpObJ6Vg62PA_E6dJA",
    authDomain: "notes-ad059.firebaseapp.com",
    databaseURL: "https://notes-ad059-default-rtdb.firebaseio.com",
    projectId: "notes-ad059",
    storageBucket: "notes-ad059.appspot.com",
    messagingSenderId: "219274801251",
    appId: "1:219274801251:web:89217198545679580a4856",
    measurementId: "G-M8S1M9EZ50"
};

if(!firebase.apps.length){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  
export default firebase;