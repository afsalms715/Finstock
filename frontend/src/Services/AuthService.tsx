import axios from "axios";
import { UserGeneratedToken } from "../Models/generatedToken";
import { handleError } from "../Helper/HandleError";

const api:string="https://localhost:7098/api/";

export const loginApi=async (username:string,password:string)=>{
    try{
        const value=axios.post<UserGeneratedToken>(api+'account/login',{
            username:username,
            password:password
        })
        return value;
    }catch(error:any){
        handleError(error);
    }
}

export const registerApi=async (email:string,username:string,password:string)=>{
    try{
        const value=axios.post<UserGeneratedToken>(api+'account/register',{
            email:email,
            username:username,
            password:password
        })
        return value;
    }catch(error:any){
        handleError(error);
    }
}