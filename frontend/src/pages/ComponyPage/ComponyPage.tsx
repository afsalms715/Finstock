import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../compony.d";
import { GetCompanyInfo } from "../../api";
import Sidebar from "../../components/Sidebar/Sidebar";
import CompanyDashbord from "../../components/CompanyDashbord/CompanyDashbord";
import Tile from "../../components/Tile/Tile";
import TenKFinder from "../../components/TenkFinder/TenKFinder";
import { formatLargeMonetaryNumber } from "../../Helper/NumberFormating";

type Props = {};

const ComponyPage = (props: Props) => {
  const { ticker } = useParams();
  const [companyProfile, setCompanyProfile] = useState<CompanyProfile>();
  useEffect(() => {
    const companyProfileApiCall = async () => {
      if (ticker) {
        const result = await GetCompanyInfo(ticker);
        setCompanyProfile(result?.data[0]);
      }
    };
    companyProfileApiCall();
  }, [ticker]);
  return (
    <div className="flex">
      <Sidebar />
      <CompanyDashbord companyProfile={companyProfile} ticker={ticker!}>
        <Tile title="Last Divident" value={"$"+companyProfile?.lastDiv.toString()} />
        <Tile title="Sector" value={companyProfile?.sector.toString()} />
        <Tile title="DCF" value={companyProfile?.dcf.toString()} />
        <Tile title="Price" value={formatLargeMonetaryNumber(companyProfile?.price)} />
        <p className="text-sm font-normal m-4">{companyProfile?.description}</p>
        <TenKFinder ticker={ticker!}/>
      </CompanyDashbord>
    </div>
  );
};

export default ComponyPage;
