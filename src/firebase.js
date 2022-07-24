import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAFutOi0tryGb1PrLjX0deaaWrvP1PzwdU",
    authDomain: "walkie-1d376.firebaseapp.com",
    projectId: "walkie-1d376",
    storageBucket: "walkie-1d376.appspot.com",
    messagingSenderId: "841495929839",
    appId: "1:841495929839:web:ed87b84319c1874b004c1a",
    measurementId: "G-GJN7FKKZPD"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();