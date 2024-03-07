import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList.tsx";
import SearchBox from "./components/Search/SearchBox.tsx";
import { CompanySearch } from "./compony.d.tsx";
import { SearchCompony } from "./api.tsx";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string|null>(null);

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

  const onAddProtfolioSubmit=(e:SyntheticEvent)=>{
    e.preventDefault();
    console.log(e);
  }

  return (
    <div>
      <SearchBox
        search={search}
        handleChange={handleChange}
        OnSearchSubmit={OnSearchSubmit}
      />
      {serverError && <div>Unable to Connect API</div>}
      <CardList searchResult={searchResult} onAddProtfolioSubmit={onAddProtfolioSubmit}/>
    </div>
  );
}

export default App;
