 
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBU210puSRJaeqAhYhAsKsYaw5fw_Cr-IE",
    authDomain: "covidar-9ef2a.firebaseapp.com",
    databaseURL: "https://covidar-9ef2a.firebaseio.com",
    projectId: "covidar-9ef2a",
    storageBucket: "covidar-9ef2a.appspot.com",
    messagingSenderId: "929982362527",
    appId: "1:929982362527:web:bfac6245139d9a263303aa"
  };


firebase.initializeApp(firebaseConfig);

const firebaseApp = firebase;

export {
    firebaseApp,
};