import React, { useEffect, useState } from 'react'
import StockCommentForm from './StockCommentForm/StockCommentForm'
import { CommentGetServies, CommentPostService } from '../../Services/CommentService'
import { toast } from 'react-toastify'
import StockCommentList from '../StockCommentList/StockCommentList'
import { CommentGet } from '../../Models/CommentModel'
import Spinner from '../Spinner/Spinner'

type Props = {
    stockSymbol:string
}
type CommentFormInputs={
    title:string;
    content:string;
}

const StockComment = ({stockSymbol}: Props) => {
    const[comments,setComments]=useState<CommentGet[]|null>(null);
    const[loading,setLoading]=useState<boolean>(false);
    const commentSubmit=async (form:CommentFormInputs)=>{
        await CommentPostService(stockSymbol,form.title,form.content).then((resp)=>{
            if(resp){
                toast.success("Comment Added Succesfully");
                fetchComment();
            }
        }).catch(e=>toast.warning(e))
    }

    const fetchComment=async()=>{
        await CommentGetServies(stockSymbol).then((resp)=>{
            if(resp){
                setComments(resp?.data);
                setLoading(false);
            }
        })
    }

    useEffect(()=>{
        setLoading(true)   
        fetchComment();
    },[])

  return (
    <>
        <StockCommentForm symbol={stockSymbol} commentSubmit={commentSubmit}/> 
        {!loading?
            <div className='flex flex-col'>
                <StockCommentList comments={comments!}/>
            </div>
            :<Spinner isLoading/>
        }
    </>
  )
}

export default StockComment