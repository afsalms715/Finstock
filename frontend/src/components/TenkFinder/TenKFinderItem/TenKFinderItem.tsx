import React from "react";
import { CompanyTenK } from "../../../compony.d";
import { Link } from "react-router-dom";

type Props = {
  tenK: CompanyTenK;
};

const TenKFinderItem = ({ tenK }: Props) => {
  const fillingYear = new Date(tenK.fillingDate).getFullYear();
  return (
    <Link
      reloadDocument
      to={tenK.finalLink}
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-teal-500 border border-gray-200 rounded-md hover:text-black"
    >
      10k - {tenK.symbol} - {fillingYear}
    </Link>
  );
};

export default TenKFinderItem;
