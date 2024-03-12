import React from "react";
import { CompanyProfile } from "../../compony.d";
import { Outlet } from "react-router";

interface Props {
  companyProfile: CompanyProfile | undefined;
}

const CompanyDashbord = ({ companyProfile }: Props) => {
  return (
    <>
      <div className="flex flex-grow flex-wrap">
        <div className="w-full h-14 text-center shadow-md m-2">
          <span className="text-md">{companyProfile?.companyName}</span>
        </div>
        <div className="w-60 h-14 text-center shadow-md m-2">
          <span className="text-sm font-semibold ">currency</span>
          <br />
          <span className="text-gray-500">{companyProfile?.currency}</span>
        </div>
        <div className="w-60 h-14 text-center shadow-md m-2">
          <span className="text-sm font-semibold ">Last Divident</span>
          <br />
          <span className="text-gray-500">${companyProfile?.lastDiv}</span>
        </div>
        <div className="w-60 h-14 text-center shadow-md m-2">
          <span className="text-sm font-semibold ">Marketcap</span>
          <br />
          <span className="text-gray-500">${companyProfile?.mktCap}</span>
        </div>
        <div className="w-60 h-14 text-center shadow-md m-2">
          <span className="text-sm font-semibold ">CEO</span>
          <br />
          <span className="text-gray-500">{companyProfile?.ceo}</span>
        </div>
        <div className="w-60 h-14 text-center shadow-md m-2">
          <span className="text-sm font-semibold ">Price</span>
          <br />
          <span className="text-gray-500">${companyProfile?.price}</span>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CompanyDashbord;
