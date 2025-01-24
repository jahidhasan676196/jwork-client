import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../Firebase/firebase.config';

export const Authcontext = createContext(null)
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signIn with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    // signOut
    const signOutWithAuth = () => {
        return signOut(auth)
    }

    // current user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        });
        return () => unSubscribe();
    }, [])

    const authInfo = {
        user,
        setUser,
        createUser ,
        signInWithGoogle,
        signOutWithAuth
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;