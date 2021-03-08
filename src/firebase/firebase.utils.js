import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyAfzptB2TcNCkCG9b5909owBFNOCOM2xYs",
    authDomain: "crwn-db-5e7d9.firebaseapp.com",
    projectId: "crwn-db-5e7d9",
    storageBucket: "crwn-db-5e7d9.appspot.com",
    messagingSenderId: "454567959297",
    appId: "1:454567959297:web:cf4552b70dde964fe15900",
    measurementId: "G-VV4RRB53C3"
};

firebase.initializeApp(config);

export const auth=firebase.auth();

export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;