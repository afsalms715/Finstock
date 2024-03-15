import React from 'react'
import {HashLoader} from 'react-spinners';

type Props = {
    isLoading:boolean;
}

const Spinner = ({isLoading=true}: Props) => {
  return (
    <>
      <HashLoader className='mx-auto my-auto'
        color='#36d7b7' 
        loading={isLoading}
        />
    </>
  )
}

export default Spinner