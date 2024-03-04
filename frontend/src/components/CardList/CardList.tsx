import React from 'react'
import Card from '../Card/Card'

type Props = {}

const CardList:React.FC<Props> = (props:Props):JSX.Element => {
    let test_desc:string="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure porro esse quibusdam repudiandae voluptatibus qui atque nihil possimus ea deleniti.";
  return (
    <div className='flex flex-wrap justify-center w-[100%]'>
        <Card companyName='ITC' price={100} ticker='ITC' decription={test_desc}/>
        <Card companyName='Tata Motors' price={100} ticker='TATM' decription={test_desc}/>
        <Card companyName='Infosys' price={100} ticker='INF' decription={test_desc}/>
        
    </div>
  )
}

export default CardList