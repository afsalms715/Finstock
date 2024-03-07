import React, { SyntheticEvent } from 'react'

interface Props{
  onAddProtfolioSubmit:(e:SyntheticEvent)=>void;
  symbol:string;
}

const AddPortfolio = ({onAddProtfolioSubmit,symbol}: Props) => {
  return (
    <>
      <form onSubmit={onAddProtfolioSubmit}>
        <input  value={symbol} hidden={true} readOnly={true}/>
        <button type='submit'>Add</button>
      </form>
    </>
  )
}

export default AddPortfolio