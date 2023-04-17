import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser} from "firebase/auth"
import app from '../../firebse.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    
    }

    const signIn=(password, email)=>{
        return signInWithEmailAndPassword(auth, password, email)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, CurrentUser=>{
            setUser(CurrentUser)
        })

        // stop observe
        return ()=>{
            return unSubscribe()
        }

    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;