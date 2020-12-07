import React, {useEffect, useState, createContext} from "react"
import firebase from "../config"

//export const AuthContext = React.createContext();
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
        setCurrentUser(user)
        setPending(false)
        });
    }, []);

    if(pending){
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider
          value={{
            currentUser
          }}
        >
          {children}
        </AuthContext.Provider>
      );
}