import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import firebase from 'firebase/compat/app';



export const AuthContext = createContext(null)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// state
const [user,setuser]=useState(null)
const [loader,setLoader]=useState(true)

// register section
const createUser=(email,password)=>{
    createUserWithEmailAndPassword(auth, email, password)
}
// sign In wite email password
const LoginWithEmailPassword=(email,password)=>{
    signInWithEmailAndPassword(auth, email, password)
}
// signInWith google
const signInWithGoogle=()=>{
    signInWithPopup(auth, provider)
}
// signOut
const signOutpopup=()=>{
    signOut(auth)
}
// current user
useEffect(()=>{
    const unsubscribe=firebase.auth().onAuthStateChanged(currentUser=>{
        setuser(currentUser)
    })
    return()=>unsubscribe()
},[])



const AuthProvider = ({ children }) => {

    const value = {
        user,
        loader,
        createUser,
        LoginWithEmailPassword,
        signInWithGoogle,
        signOutpopup,

    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;