import axios from "axios";
import { portfolioGet, portfolioPost } from "../Models/PortfolioModel";
import { handleError } from "../Helper/HandleError";

const api="https://localhost:7098/api/Portfolio";

export const portfolioGetService= async()=>{
    try{
        const result= await axios.get<portfolioGet[]>(api);
        return result
    }catch(e){
        handleError(e)
    }
}

export const portfolioPostService= async (symbol:string)=>{
    try{
        const value=await axios.post<portfolioPost>(api+`?symbol=${symbol}`);
        console.log(value);
        return value;
    }catch(e){
        handleError(e)
    }
}