import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'; // eslint-disable-next-line
import firestore from 'firebase/firestore';


firebase.initializeApp({
  apiKey: "AIzaSyDZg1LWImXV2a8UeGAAYmnBJMquex99hPs",
  authDomain: "noteapplication-b3963.firebaseapp.com",
  projectId: "noteapplication-b3963",
  storageBucket: "noteapplication-b3963.appspot.com",
  messagingSenderId: "1092605272194",
  appId: "1:1092605272194:web:e7976a197a3c1096bd549b",
  measurementId: "G-BTHRDL3E8B"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
