import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { CompanySearch } from "../../compony.d";
import { SearchCompony } from "../../api";
import SearchBox from "../../components/Search/SearchBox";
import PortfolioList from "../../components/Portfolio/PortfolioList/PortfolioList";
import CardList from "../../components/CardList/CardList";

type Props = {};

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const [portfolios, setPortfolios] = useState<string[]>([]);

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
    }
    console.log(searchResult);
  };

  const onAddProtfolioSubmit = (e: any) => {
    e.preventDefault();
    const exist = portfolios.find((value) => value === e.target[0].value);
    if (exist) return;
    setPortfolios([...portfolios, e.target[0].value]);
  };

  const onDeletePortfolio = (e: any) => {
    e.preventDefault();
    const removed = portfolios.filter((value) => value !== e.target[0].value);
    setPortfolios(removed);
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
        portfolios={portfolios}
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
