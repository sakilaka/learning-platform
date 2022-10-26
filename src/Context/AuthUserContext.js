import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthUserContext = ({ children }) => {
    const [user, setUser] = useState(null);



    const googleProviderLogin = googleProvider => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubProviderLogin = githubProvider => {
        return signInWithPopup(auth, githubProvider)
    }

    const signUpWithEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {

        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
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

export default AuthUserContext;