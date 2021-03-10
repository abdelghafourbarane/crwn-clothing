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

export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if (!userAuth) return ;
    
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot=await userRef.get();

    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        }catch(err){
            console.log('error creating user :',err.message)
        }
    }

    return userRef;
    
}

firebase.initializeApp(config);

export const auth=firebase.auth();

export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;