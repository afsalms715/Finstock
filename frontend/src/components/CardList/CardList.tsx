import React from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../compony.d';
import { v4 as uuidv4 } from "uuid";

interface Props{
    searchResult:CompanySearch[];
}

const CardList:React.FC<Props> = ({searchResult}:Props):JSX.Element => {
    let test_desc:string="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure porro esse quibusdam repudiandae voluptatibus qui atque nihil possimus ea deleniti.";
  return (
    <div className='flex flex-wrap justify-center w-[100%]'>
        {searchResult.length>0 ?
           searchResult.map((result)=>(
                <Card id={result.symbol} companyData={result} key={uuidv4()}/>
           ))
        :
            (<h2>No Result found !</h2>)
        }
    </div>
  )
}

export default CardList