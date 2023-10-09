import { createContext, useEffect, useState } from "react";


import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./firebase.config";



export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

     const[user, setUser] = useState(null);

     const [loading,setLoading] = useState(true);

    const createUser = (email, password) =>{

        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password) => {
        setLoading(true);

        return signInWithEmailAndPassword (auth, email, password);
    }


    
    const logOut = () => {

        setLoading(true);

        return signOut(auth);
    }
    
    
    
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{

            console.log("user in the auth state changed", currentUser);
            setUser(currentUser);
            setLoading(false);

        });
        return () => {

            unSubscribe();
        }



    },[])


    const authInfo = {
        user, createUser, signIn, logOut, loading
    }

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>



        // <div>
        //     <h1>I am Auth Provider</h1>
        // </div>
    );
};

export default AuthProvider;