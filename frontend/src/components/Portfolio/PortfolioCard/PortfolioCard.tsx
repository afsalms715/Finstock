import React, { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import { Link } from "react-router-dom";

interface Props {
  symbol: string;
  onDeletePortfolio: (e: SyntheticEvent) => void;
}

const PortfolioCard = ({ symbol, onDeletePortfolio }: Props) => {
  return (
    <div className="max-w-sm md:w-[19%] rounded overflow-hidden shadow-lg m-1">
      {/*<img className="w-full" src="https://i.ibb.co/WBWWD4h/685-6854994-react-logo-no-background-hd-png-download.png" alt="Sunset in the mountains"/>*/}
      <div className="px-6 py-4 ">
        <Link to={`/company/${symbol}`} className="text-center block font-bold text-xl mb-2">({symbol})</Link>
        <DeletePortfolio
          onDeletePortfolio={onDeletePortfolio}
          symbol={symbol}
        />
      </div>
    </div>
  );
};

export default PortfolioCard;
