import React from 'react'
import { CommentGet } from '../../../Models/CommentModel'

type Props = {
    comment:CommentGet
}

const StockCommentItem = ({comment}: Props) => {
  return (
    <div className='w-full shadow-md m-2 p-2'>
        <p className='text-sm font-normal text-gray-600 pb-1 '>@{comment.createdBy}</p>
        <h2 className='text-md font-semibold uppercase'>{comment.title}</h2>
        <p className='text-sm '>{comment.content}</p>
    </div>
  )
}

export default StockCommentItem