import axios from "axios";
import { CommentGet, CommentPost } from "../Models/CommentModel";
import { handleError } from "../Helper/HandleError";

const api="https://localhost:7098/api/comment/";

export const CommentPostService= async(symbol:string,title:string,content:string)=>{
    try{
        const resp=await axios.post<CommentPost>(api+symbol,{
            title:title,
            content:content
        });
        return resp;
    }catch(error){
        handleError(error);
    }
}

export const CommentGetServies = async(symbol:string)=>{
    try{
        const resp= await axios.get<CommentGet[]>(api +`?Symbol=${symbol}`);
        return resp;
    }catch(error){
        handleError(error);
    }
}