import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (  
    <div className="max-w-sm md:w-[20%] rounded overflow-hidden shadow-lg m-1">
        <img className="w-full" src="https://i.ibb.co/WBWWD4h/685-6854994-react-logo-no-background-hd-png-download.png" alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Stock Name</div>
            <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
    </div>
  )
}

export default Card