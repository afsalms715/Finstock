import React from "react";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";


type Props = {
  symbol: string;
  commentSubmit:(form:CommentFormInputs)=>void
};

type CommentFormInputs={
    title:string;
    content:string;
}

const validation=Yup.object().shape({
    title:Yup.string().required("Title is Required"),
    content:Yup.string().required("Content is Required")
})

const StockCommentForm = ({ symbol,commentSubmit}: Props) => {
    const {register,handleSubmit,formState:{errors}}=useForm<CommentFormInputs>({resolver:yupResolver(validation)});
  return (
    <>
      <div className="flex mx-auto items-center justify-center shadow-lg mb-4 ">
        <form className="w-full  bg-white rounded-lg px-4 pt-2" onSubmit={handleSubmit(commentSubmit)}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <input
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full  py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                placeholder="Title"
                {...register("title")}
              />
              <p className="text-red-600">{errors.title?.message}</p>
            </div>
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                placeholder="Type Your Comment"
                {...register("content")}
              ></textarea>
            </div>
            <div className="w-full md:w-full flex items-start px-3">
              <div className="-mr-1">
                <input
                  type="submit"
                  className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                  value="Post Comment"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default StockCommentForm;
