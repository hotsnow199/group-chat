import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// import './firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDanCxyt1wKcz2Jv9-Yf41h1dDILn-Fsr4',
  authDomain: 'test-database-a130d.firebaseapp.com',
  databaseURL: 'https://test-database-a130d-default-rtdb.firebaseio.com',
  projectId: 'test-database-a130d',
  storageBucket: 'test-database-a130d.appspot.com',
  messagingSenderId: '1014012499105',
  appId: '1:1014012499105:web:5d2bf8b3c512b9d7c8cce0',
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();
