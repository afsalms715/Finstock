import React, { useEffect, useState } from "react";
import { CompanyTenK } from "../../compony.d";
import { getTenK } from "../../api";
import Spinner from "../Spinner/Spinner";
import TenKFinderItem from "./TenKFinderItem/TenKFinderItem";

type Props = {
  ticker: string;
};

const TenKFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyTenK[]>();
  useEffect(() => {
    const fetchTenK = async () => {
      const value = await getTenK(ticker!);
      setCompanyData(value?.data);
      console.log(value?.data)
    };
    fetchTenK();
  },[ticker]);
  return (
    <div className="inline-flex rounded-md shadow-sm m-4" role="group">
      {companyData ? (
        companyData?.slice(0, 5).map((tenK) => <TenKFinderItem tenK={tenK} />)
      ) : (
        <Spinner isLoading />
      )}
    </div>
  );
};

export default TenKFinder;
