import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {FirebaseAppProvider, FirestoreProvider,AuthProvider, useFirebaseApp} from 'reactfire';
import {getFirestore, connectFirestoreEmulator} from 'firebase/firestore';
import { connectAuthEmulator, getAuth, sendPasswordResetEmail } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCZsBibeagK2mGIDlVYmcNplk9myV6JvCY",
    authDomain: "personalprojectmanager-be9ca.firebaseapp.com",
    projectId: "personalprojectmanager-be9ca",
    storageBucket: "personalprojectmanager-be9ca.appspot.com",
    messagingSenderId: "1089200769337",
    appId: "1:1089200769337:web:b41c74fb97a01153dcc0e8",
    measurementId: "G-P223M5147W"
};

ReactDOM.createRoot(document.getElementById('root')).render (
    <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <Load_modules/>
        </FirebaseAppProvider>
    </React.StrictMode>
)

function Load_modules() {
    const firestore = getFirestore(useFirebaseApp());
    const auth = getAuth(useFirebaseApp());
    
    if (process.env.NODE_ENV !== 'production') {
        // Set up emulators
        console.log("Emulator mode")
      }

    return (
        <FirestoreProvider sdk={firestore}>
            <AuthProvider sdk={auth}>
            <App/>
            </AuthProvider>
        </FirestoreProvider>
    )
}
