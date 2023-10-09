import { createContext, useState } from "react";


import { getAuth } from "firebase/auth";
import app from "./firebase.config";



export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

     const[user, setUser] = useState(null);

    const authInfo = {
        user,
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