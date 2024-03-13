import React from 'react'
import {testIncomeStatementData} from './TestData';

type Props = {
    data:any;
    config:any;
}


const Table = ({data,config}: Props) => {
    const renderRows=data.map((company:any)=>{
        return(
            <tr>
                {config.map((val:any)=>{
                    return(
                        <td className='text-sm font-normal p-2  border border-gray-400'>{val?.render(company)}</td>
                    )
                })}
                
            </tr>
        )
    })

    const renderHeaders=config.map((val:any)=>{
        return(
            <th className='bg-teal-500 text-white border border-white p-1'>{val?.label}</th>
        )
    })
  return (
    <div className='bg-white'>
        <table className='table-auto mx-auto shadow-md rounded-md'>
            <thead>
                {renderHeaders}
            </thead>
            <tbody>
                {renderRows}
            </tbody>
        </table>
    </div>
  )
}

export default Table