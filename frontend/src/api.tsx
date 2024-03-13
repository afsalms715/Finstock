import axios from "axios"
import { CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./compony.d"

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

export const GetCompanyInfo= async (query:string)=>{
    try{
        const data= await axios.get<CompanyProfile[]>(`https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`);
        return data;
    }catch(error:any){
        console.log("error message:"+error.message)
    }
}

export const getCompanyKeyMetrics=async (query:string)=>{
    try{
        const data= await axios.get<CompanyKeyMetrics[]>(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?limit=40&apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`);
        return data;
    }catch(error:any){
        console.log("error message:"+error.message);
    }
}

export const getIncomeStatemen= async (query:string)=>{
    try{
        const data= await axios.get<CompanyIncomeStatement[]>(`https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=50&apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`)
        return data;
    }catch(error:any){
        console.log("error message:"+error.message)
    }
}