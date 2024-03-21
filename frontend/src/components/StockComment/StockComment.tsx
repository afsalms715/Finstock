import React from 'react'
import StockCommentForm from './StockCommentForm/StockCommentForm'
import { CommentPostService } from '../../Services/CommentService'
import { toast } from 'react-toastify'

type Props = {
    stockSymbol:string
}
type CommentFormInputs={
    title:string;
    content:string;
}

const StockComment = ({stockSymbol}: Props) => {
    const commentSubmit=async (form:CommentFormInputs)=>{
        await CommentPostService(stockSymbol,form.title,form.content).then((resp)=>{
            if(resp){
                toast.success("Comment Added Succesfully");
            }
        }).catch(e=>toast.warning(e))
    }
  return (
    <>
        <StockCommentForm symbol={stockSymbol} commentSubmit={commentSubmit}/> 
    </>
  )
}

export default StockComment