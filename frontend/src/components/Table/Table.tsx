import React from 'react'
import {testIncomeStatementData} from './TestData';

type Props = {}
const data=testIncomeStatementData;
type Company=(typeof data)[0];

const config=[
    {
        label:"Year",
        render:(company:Company)=>new Date(company.acceptedDate).getFullYear(),
    },
    {
        label:"Cost Of Revenue",
        render:(compony:Company)=>compony.costOfRevenue,
    }
]

const Table = (props: Props) => {
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

    const renderHeaders=config.map((val)=>{
        return(
            <th className='bg-teal-500 text-white border border-white'>{val?.label}</th>
        )
    })
  return (
    <div className='bg-white'>
        <table className='table-auto mx-auto'>
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