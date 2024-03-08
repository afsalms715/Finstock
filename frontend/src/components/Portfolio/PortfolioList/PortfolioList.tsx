import React, { SyntheticEvent } from 'react'
import PortfolioCard from '../PortfolioCard/PortfolioCard';

interface Props{
  portfolios:string[];
  onDeletePortfolio:(e:SyntheticEvent)=>void;
}

const PortfolioList = ({portfolios,onDeletePortfolio}: Props) => {
  return (
    <div>
      <h2>My Portfolio</h2>
      <div className='flex flex-wrap'>
        {portfolios && portfolios.map((symbol)=>{
          return <PortfolioCard symbol={symbol} onDeletePortfolio={onDeletePortfolio}/>
          })
        }
      </div>
    </div>
  )
}

export default PortfolioList