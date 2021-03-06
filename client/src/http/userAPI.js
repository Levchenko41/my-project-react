import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { Context } from "..";


// const {user}=useContext(Context);

export const registration = async (name, lastName, email, password) =>{
    const {data} = await $host.post('api/user/registration', {name, lastName, email, password, role:'USER'})
    
    
    localStorage.setItem('token', data.token)
   return jwt_decode(data.token)
  
   
    
}

export const login = async (email, password) =>{
    const {data} = await $host.post('api/user/login', {email, password});
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async ()=>{
    const {data} = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token)
    console.log(jwt_decode(data.token))
    // user.setDataUser(jwt_decode(data.token))
    return jwt_decode(data.token)
}