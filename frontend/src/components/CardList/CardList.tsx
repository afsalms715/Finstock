import React from 'react'
import Card from '../Card/Card'

type Props = {}

const CardList = (props: Props) => {
  return (
    <div className='flex flex-wrap justify-center w-[100%]'>
        <Card companyName='ITC' price={100} ticket='testing description....'/>
        <Card companyName='ITC' price={100} ticket='testing description....'/>
        <Card companyName='ITC' price={100} ticket='testing description....'/>
        <Card companyName='ITC' price={100} ticket='testing description....'/>
        <Card companyName='ITC' price={100} ticket='testing description....'/>
        <Card companyName='ITC' price={100} ticket='testing description....'/>
        <Card companyName='ITC' price={100} ticket='testing description....'/>
        <Card companyName='ITC' price={100} ticket='testing description....'/>
        <Card companyName='ITC' price={100} ticket='testing description....'/>
        <Card companyName='ITC' price={100} ticket='testing description....'/>
        <Card companyName='ITC' price={100} ticket='testing description....'/>
        <Card companyName='ITC' price={100} ticket='testing description....'/>
    </div>
  )
}

export default CardList