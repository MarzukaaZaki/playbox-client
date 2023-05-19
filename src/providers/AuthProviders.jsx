import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';


const auth = getAuth(app);

export const AuthContext = createContext(null); 

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Implement Google Log In
    const googleAuthProvider = new GoogleAuthProvider();
    const googleLogIn = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }

    const authInfo = {
        createUser,
        googleLogIn,

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