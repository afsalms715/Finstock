import React from "react";
import { TestDataCompany } from "../Table/TestData";

type Props = {
  data:any;
  config:any;
};

const RatioList = ({data,config}: Props) => {
  const renderRows = config.map((row:any,index:number) => {
    return (
      <div className="py-4 px-3" key={index}>
        <div className="flex item-center space-x-4">
          <div className="flex-1">
            <p className="text-sm font-medium">{row.label}</p>
            <p className="text-sm font-medium text-gray-500">{row.subTitle}</p>
          </div>
          <p className="text-sm font-medium">{row.render(data)}</p>
        </div>
      </div>
    );
  });
  return <div className="bg-white rounded-lg shadow-md h-full m-2">
    <ul className="divide-y divide-gray-400">
      {renderRows}
    </ul>
  </div>;
};

export default RatioList;
