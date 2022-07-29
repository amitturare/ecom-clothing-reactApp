import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBReesHSBlDKenHiT-b6ZViE7Iwt5q6oGk",
    authDomain: "ecom-clothing-reactapp-db.firebaseapp.com",
    projectId: "ecom-clothing-reactapp-db",
    storageBucket: "ecom-clothing-reactapp-db.appspot.com",
    messagingSenderId: "1031009042807",
    appId: "1:1031009042807:web:7eafa054efc07c9e68a172",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    // Check if the user data exists
    // return userDocRef
    // if it doesn't exist
    // set/create the doc with the data
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (err) {
            console.log("Error: ", err.message);
        }
    }
    return userDocRef;
};