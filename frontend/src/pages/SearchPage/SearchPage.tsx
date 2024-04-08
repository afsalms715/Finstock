import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { CompanySearch } from "../../compony.d";
import { SearchCompony } from "../../api";
import SearchBox from "../../components/Search/SearchBox";
import PortfolioList from "../../components/Portfolio/PortfolioList/PortfolioList";
import CardList from "../../components/CardList/CardList";
import { portfolioDeleteService, portfolioGetService, portfolioPostService } from "../../Services/PortfolioService";
import { portfolioGet } from "../../Models/PortfolioModel";

type Props = {};

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const [portfolios, setPortfolios] = useState<portfolioGet[]|null>([]);

  useEffect(()=>{
    fetchPortfolio();
  },[])

  const fetchPortfolio= async()=>{
    const result= await portfolioGetService();
    setPortfolios(result?.data!);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const OnSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await SearchCompony(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
      console.log(result?.data);
    }   
  };

  const onAddProtfolioSubmit =async (e: any) => {
    e.preventDefault();
    const exist = portfolios?.find((value) => value.symbol === e.target[0].value);
    if (exist) return;
    await portfolioPostService(e.target[0].value)
    fetchPortfolio();
  };

  const onDeletePortfolio =async (e: any) => {
    e.preventDefault();
    console.log(e.target[0].value);
    await portfolioDeleteService(e.target[0].value).then(()=>fetchPortfolio().then(()=>console.log("fetch after delete")))
  };
  return (
    <>
      <SearchBox
        search={search}
        handleChange={handleChange}
        OnSearchSubmit={OnSearchSubmit}
      />
      {serverError && <div>Unable to Connect API</div>}
      <PortfolioList
        portfolios={portfolios!}
        onDeletePortfolio={onDeletePortfolio}
      />
      <CardList
        searchResult={searchResult}
        onAddProtfolioSubmit={onAddProtfolioSubmit}
      />
    </>
  );
};

export default SearchPage;
