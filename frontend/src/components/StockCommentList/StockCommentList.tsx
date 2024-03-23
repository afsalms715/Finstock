import React, { useEffect, useState } from "react";
import { CommentGet } from "../../Models/CommentModel";
import StockCommentItem from "./StockCommentItem/StockCommentItem";
import Spinner from "../Spinner/Spinner";
import { CommentGetServies } from "../../Services/CommentService";

type Props = {
  comments: CommentGet[];
};

const StockCommentList = ({ comments }: Props) => {
  return (
    <>
      {comments
        ? comments.map((comment) => {
            {
              return <StockCommentItem comment={comment} />;
            }
          })
        : "No Comments"}
    </>
  );
};

export default StockCommentList;
