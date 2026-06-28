import axios from "axios"


const api = axios.create({
    baseURL: "http://localhost:3000",  //for repetitive code in below function --> base url + withCredentials can be removed
    withCredentials: true
})

export async function register({username, email, password}){


    try{
    const response = await api.post('/api/auth/register',{    //axios.post --> api.post and withCredential eliminated can be repeated below as
        username, email, password
    })

    return response.data
    }catch(err) {
        console.error(err)
        return null
    }
}


export async function login({email, password}){
    try{

        const response = await axios.post("http://localhost:3000/api/auth/login",{
            email, password
        },{withCredentials: true}
        )

        return response.data

    }catch(err){
        console.error(err)
        return null
    }
}


export async function logout(){

    try{
        const response = await axios.get("http://localhost:3000/api/auth/logout",{
            withCredentials: true
        })

        return response.data
    }catch(err){
        console.error(err)
        return null
    }
}



export async function getMe(){

    try{

        const response = await axios.get("http://localhost:3000/api/auth/get-me",{
            withCredentials: true
        })

        return response.data
    }catch(err){
        console.error(err)
        return null
    }
}