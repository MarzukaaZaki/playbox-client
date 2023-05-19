import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';


const auth = getAuth(app);

export const AuthContext = createContext(null); 

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Implement Log In with Email and Password
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Implement Log out
    const logOut = () => {
        signOut(auth);
    }

    // Implement Google Log In
    const googleAuthProvider = new GoogleAuthProvider();
    const googleLogIn = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }

    // Set up an observer to track user sign-in state changes
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        });

        return ()=>{
            unsubscribe();
        }

    }, [])


    const authInfo = {
        user,
        createUser,
        googleLogIn,
        logIn,
        logOut

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProviders;