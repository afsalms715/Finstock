import React, { Children } from "react";
import { CompanyProfile } from "../../compony.d";
import { Outlet } from "react-router";

interface Props {
  companyProfile: CompanyProfile | undefined;
  children: React.ReactNode;
}

const CompanyDashbord = ({ companyProfile, children }: Props) => {
  return (
    <>
      <div className="flex flex-grow flex-wrap">
        <div className="w-full h-14 text-center shadow-md m-2">
          <span className="text-md">{companyProfile?.companyName}</span>
        </div>
        {children}
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CompanyDashbord;
