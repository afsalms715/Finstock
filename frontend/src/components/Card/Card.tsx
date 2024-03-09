import React, { SyntheticEvent } from 'react'
import { CompanySearch } from '../../compony.d';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface Props  {
    id:string;
    companyData:CompanySearch;
    onAddProtfolioSubmit:(e:SyntheticEvent)=>void;
}

const Card:React.FC<Props> = ({companyData,onAddProtfolioSubmit}:Props):JSX.Element => {
  return (  
    <div className="max-w-sm w-full rounded overflow-hidden shadow-lg m-1">
        {/*<img className="w-full" src="https://i.ibb.co/WBWWD4h/685-6854994-react-logo-no-background-hd-png-download.png" alt="Sunset in the mountains"/>*/}
        <div className="px-6 py-4">
        <div className="text-center font-bold text-xl mb-2">{companyData.name} ({companyData.symbol})</div>
            <p className='text-center font-bold text-sm'>${companyData.currency}</p>
            <p className="text-gray-700 text-base text-center">
                {companyData.exchangeShortName}-{companyData.stockExchange}
            </p>
        </div>
        <AddPortfolio onAddProtfolioSubmit={onAddProtfolioSubmit} symbol={companyData.symbol}/>
    </div>
  )
}

export default Card