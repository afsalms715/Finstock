import React from "react";
import { TestDataCompany } from "../Table/TestData";

type Props = {};

const data = TestDataCompany[0];
type Compony = typeof data;

const config = [
  {
    label: "Company Name",
    render: (company: Compony) => company.companyName,
    subtitile: "this is company name",
  },
];

const RatioList = (props: Props) => {
  const renderRows = config.map((row) => {
    return (
      <div className="py-4 px-3">
        <div className="flex item-center space-x-4">
          <div className="flex-1">
            <p className="text-sm font-medium">{row.label}</p>
            <p className="text-sm font-medium">{row.subtitile}</p>
          </div>
          <p className="text-sm font-medium">{row.render(data)}</p>
        </div>
      </div>
    );
  });
  return <div className="bg-white rounded-lg shadow-md h-full m-2">
    <ul className="divide-y divide-gray-500">
      {renderRows}
    </ul>
  </div>;
};

export default RatioList;
