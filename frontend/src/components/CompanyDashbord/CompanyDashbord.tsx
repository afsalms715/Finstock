import React, { Children, useEffect } from "react";
import { CompanyProfile } from "../../compony.d";
import { Outlet, useNavigate } from "react-router";

interface Props {
  companyProfile: CompanyProfile | undefined;
  children: React.ReactNode;
  ticker:string;
}

const CompanyDashbord = ({ companyProfile, children,ticker }: Props) => {
  const navigate=useNavigate();
  useEffect(()=>{
    navigate("company-profile");
  },[])
  return (
    <>
      <div className="flex flex-grow flex-wrap">
        <div className="w-full h-14 text-center shadow-md m-2">
          <span className="text-md">{companyProfile?.companyName}</span>
        </div>
        {children}
        <div className="w-full">
          <Outlet context={ticker}/>
        </div>
      </div>
    </>
  );
};

export default CompanyDashbord;
