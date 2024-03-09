import React, { SyntheticEvent } from 'react'

interface Props{
  onAddProtfolioSubmit:(e:SyntheticEvent)=>void;
  symbol:string;
}

const AddPortfolio = ({onAddProtfolioSubmit,symbol}: Props) => {
  return (
    <>
      <form onSubmit={onAddProtfolioSubmit} className='flex justify-center'>
        <input  value={symbol} hidden={true} readOnly={true}/>
        <button className='bg-teal-500 py-1 px-3 rounded-md text-white font-sans text-sm m-2' type='submit'>Add</button>
      </form>
    </>
  )
}

export default AddPortfolio