import React from 'react'

interface Props  {
    companyName:string;
    ticket:string;
    price:number;
}

const Card = ({companyName,ticket,price}: Props) => {
  return (  
    <div className="max-w-sm md:w-[19%] rounded overflow-hidden shadow-lg m-1">
        <img className="w-full" src="https://i.ibb.co/WBWWD4h/685-6854994-react-logo-no-background-hd-png-download.png" alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
        <div className="text-center font-bold text-xl mb-2">{companyName}</div>
            <p className='text-center font-bold text-sm'>${price}</p>
            <p className="text-gray-700 text-base">
                {ticket}
            </p>
        </div>
    </div>
  )
}

export default Card