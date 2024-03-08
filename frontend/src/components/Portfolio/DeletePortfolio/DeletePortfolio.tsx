import React, { SyntheticEvent } from 'react'

interface Props{
    onDeletePortfolio:(e:SyntheticEvent)=>void;
    symbol:string;
}

const DeletePortfolio = ({onDeletePortfolio,symbol}: Props) => {
  return (
    <>
        <form onSubmit={onDeletePortfolio}>
            <input name='symbol' value={symbol} readOnly={true} hidden={true}/>
            <button className="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            >
            Remove
            </button>
        </form>
    </>
  )
}

export default DeletePortfolio