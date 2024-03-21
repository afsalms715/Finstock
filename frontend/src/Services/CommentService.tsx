import axios from "axios";
import { CommentModel } from "../Models/CommentModel";
import { handleError } from "../Helper/HandleError";

const api="https://localhost:7098/api/comment/";

export const CommentPostService= async(symbol:string,title:string,content:string)=>{
    try{
        const resp=await axios.post<CommentModel>(api+symbol,{
            title:title,
            content:content
        });
        return resp;
    }catch(error){
        handleError(error);
    }
}