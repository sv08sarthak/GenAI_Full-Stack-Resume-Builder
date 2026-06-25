import {createContext, useState} from "react";


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)  //setting this false for now but at the time of production it is set on true
                    //whenever we reload the home page after implementing protected functionality it lands on to login page again which is a problem since user is existing stil it is going to login again.
                    //for that we are changing this state from false to true. and import useEffect

    


    return (
        <AuthContext.Provider value={{user, setUser, loading, setLoading}} >
            {children}
        </AuthContext.Provider>
    )


}