import axios from "axios"
 
const routeAPI = axios.create({
    baseURL:import.meta.env.VITE_API_ROUTE
}) 

export function setClientToken(token){
    routeAPI.interceptors.request.use(async function (config) {
        config.headers.Authorization = "Bearer " + token;
        return config; 
    })
}

export async function fetchLoginAPI (body){
    const response = await routeAPI.post("auth/login", body)
    console.log(response)
    return response.data.token
}

export async function fetchRegisterAPI (body){
    const response = await routeAPI.post("auth/register", body)
    console.log(response)
    return response.data
}