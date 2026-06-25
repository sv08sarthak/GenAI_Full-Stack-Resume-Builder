import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context"
import {login, register, logout, getMe} from "../services/auth.api"

export const useAuth = () => {

     const context = useContext(AuthContext)
    const {user, setUser, loading, setLoading}  = context     //creation of hook layer wich is mangaing both state and api layer

    const handleLogin = async ({email, password }) => {
        setLoading(true)

        try{

            const data = await login( {email, password} )
            setUser(data.user)
        } catch (err){

        } finally {

            setLoading(false)
        }

    }


    const handleRegister = async ({username, email, password}) => {
        setLoading(true)
        try{

            const data = await register({username, email, password})
            
            //Backend me controller me register controller me aap response user ka data bhi bhej rahe ho that's why we are using setUser
            setUser(data.user)
        } catch (err) {

        } finally{

            setLoading(false)
        }

    }

    const handleLogout = async () => {
        setLoading(true)
        try{

            const data = await logout()
            setUser(null) //logout controller not giving any user data in response so we will use null
        } catch(err) {

        } finally{

            setLoading(false)
        }
    }


    useEffect( ()=> {
        const getAndSetUser = async()=> {
            const data = await getMe()
            setUser(data.user)   //this works because depends on cookies which carries token 
                                //till we have token we can get user data from backend
            setLoading(false)
        }

        getAndSetUser()
    },[])



    return {user, loading, handleRegister, handleLogin, handleLogout}
}

