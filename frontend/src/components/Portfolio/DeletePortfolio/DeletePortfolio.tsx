import React, { SyntheticEvent } from 'react'

interface Props{
    onDeletePortfolio:(e:SyntheticEvent)=>void;
    symbol:string;
}

const DeletePortfolio = ({onDeletePortfolio,symbol}: Props) => {
  return (
    <>
        <form onSubmit={onDeletePortfolio} className='flex justify-center'>
            <input name='symbol' value={symbol} readOnly={true} hidden={true}/>
            <button className="select-none rounded-lg bg-red-500  py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            >
            Remove
            </button>
        </form>
    </>
  )
}

export default DeletePortfolio