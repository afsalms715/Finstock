import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../compony.d";
import { GetCompanyInfo } from "../../api";
import Sidebar from "../../components/Sidebar/Sidebar";
import CompanyDashbord from "../../components/CompanyDashbord/CompanyDashbord";
import Tile from "../../components/Tile/Tile";

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
      <CompanyDashbord companyProfile={companyProfile}>
        <Tile title="Last Divident" value={"$"+companyProfile?.lastDiv.toString()} />
        <Tile title="Market Cap" value={"$"+companyProfile?.mktCap.toString()} />
        <Tile title="CEO" value={companyProfile?.ceo.toString()} />
        <Tile title="Price" value={companyProfile?.price.toString()} />
      </CompanyDashbord>
    </div>
  );
};

export default ComponyPage;
