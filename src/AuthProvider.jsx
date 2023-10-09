import { createContext, useEffect, useState } from "react";


import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebase.config";



export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

     const[user, setUser] = useState(null);

    const createUser = (email, password) =>{

        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{

            console.log("user in the auth state changed", currentUser);
            setUser(currentUser);

        });
        return () => {

            unSubscribe();
        }



    },[])


    const authInfo = {
        user, createUser
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