import {useAuth} from "../hooks/useAuth"
import {Navigate} from "react-router"
import React, { children } from 'react'

const Protected = ({children}) => {
    const {loading, user} = useAuth()
    //const navigate = useNavigate()

    if(loading){
        return (<main><h1>Loaidng.......</h1></main>)

    }




if(!user){
    return <Navigate to ={'/login'}/>

}

return children
}

export default Protected