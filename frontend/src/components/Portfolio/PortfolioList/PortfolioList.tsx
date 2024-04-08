import React, { SyntheticEvent } from 'react'
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import { portfolioGet } from '../../../Models/PortfolioModel';

interface Props{
  portfolios:portfolioGet[];
  onDeletePortfolio:(e:SyntheticEvent)=>void;
}

const PortfolioList = ({portfolios,onDeletePortfolio}: Props) => {
  return (
    <div>
      <h2 className='text-sm text-center font-medium'>My Portfolio</h2>
      <div className='flex flex-wrap justify-center'>
        {portfolios && portfolios.map((data,index)=>{
          return <PortfolioCard key={index} symbol={data.symbol} onDeletePortfolio={onDeletePortfolio}/>
          })
        }
      </div>
    </div>
  )
}

export default PortfolioList