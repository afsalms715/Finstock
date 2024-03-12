import React from 'react'
import Table from '../../components/Table/Table'
import RatioList from '../../components/RatioList/RatioList'

type Props = {}

const DesignGuid = (props: Props) => {
  return (
    <div>
        <h1>Design Guid</h1><br/>
        <h2>This is the page where will house various design aspect of our app</h2>
        <RatioList/>
        <Table/>
    </div>
  )
}

export default DesignGuid