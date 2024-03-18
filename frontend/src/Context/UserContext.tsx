import React,{createContext, useEffect, useState} from "react";
import { userProfile } from "../Models/generatedToken";
import { useNavigate } from "react-router";
import axios from "axios";

type UserContextType= {
  token: string | null;
  user: userProfile;
  registerUser: (email: string, username: string, password: string) => void;
  loginUser: (username: string, password: string) => void;
  logoutUser: () => void;
  isLogin: () => boolean;
}

type prop={
    children:React.ReactNode;
}

const UserContext=createContext<UserContextType>({} as UserContextType);

cosnt UserProvider=({children}:prop)=>{
    const navigate=useNavigate();
    const[user,setUser]=useState<userProfile|null>(null);
    const[token,setToken]=useState<string|null>(null);
    const[isReady,setIsReady]=useState<boolean>(false);

    useEffect(()=>{
        const user=localStorage.getItem("user");
        const token=localStorage.getItem("token");
        if(user && token){
            setToken(token);
            setUser(JSON.parse(user));
            axios.defaults.headers.common["Authorization"]="Bearer"+token;
            setIsReady(true);
        }
    },[])
}
