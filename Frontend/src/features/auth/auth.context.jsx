import {createContext, useState} from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)  //setting this false for now but at the time of production it is set on true

    return (
        <AuthContext.Provider value={{user, setUser, loading, setLoading}} >
            {children}
        </AuthContext.Provider>
    )


}