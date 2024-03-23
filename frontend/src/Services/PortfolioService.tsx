import axios from "axios";
import { portfolioGet } from "../Models/PortfolioModel";
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