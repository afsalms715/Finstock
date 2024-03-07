import React from 'react'
import PortfolioCard from '../PortfolioCard/PortfolioCard';

interface Props{
  portfolios:string[];
}

const PortfolioList = ({portfolios}: Props) => {
  return (
    <div>
      <h2>My Portfolio</h2>
      <div className='flex flex-wrap'>
        {portfolios && portfolios.map((symbol)=>{
          return <PortfolioCard symbol={symbol}/>
          })
        }
      </div>
    </div>
  )
}

export default PortfolioList