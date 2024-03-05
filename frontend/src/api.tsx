import axios from "axios"
import { CompanySearch } from "./compony.d"

export interface SearchResponce{
    data:CompanySearch[]
}

export const SearchCompony=async (query:string)=>{
    try{
        const result=await axios.get<SearchResponce>(`https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`);
        return result;
    }catch(error){
        if(axios.isAxiosError(error)){
            console.log("error message:"+error);
            return error.message;
        }else{
            console.log("unexpected error:"+error);
            return "unexpected error accure";
        }
    }
}