import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthUserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [load, setLoad] = useState(true);




    const googleProviderLogin = googleProvider => {
        setLoad(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubProviderLogin = githubProvider => {
        setLoad(true)

        return signInWithPopup(auth, githubProvider)
    }

    const signUpWithEmailPass = (email, password) => {
        setLoad(true)

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoad(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {

        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setLoad(false)

        });

        return () => unSubscriber();

    }, [])



    const authInfo =
    {
        user,
        setUser,
        googleProviderLogin,
        githubProviderLogin,
        signUpWithEmailPass,
        signIn,
        logOut,
        load
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthUserContext;