import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { CompanyCashFlow } from "../../compony.d";
import { getCashFlowStatement } from "../../api";
import Table from "../Table/Table";
import Spinner from "../Spinner/Spinner";

type Props = {};
const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) =>
      (company.operatingCashFlow),
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      (company.netCashUsedForInvestingActivites),
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      (
        company.netCashUsedProvidedByFinancingActivities
      ),
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) =>
      (company.cashAtEndOfPeriod),
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) =>
      (company.capitalExpenditure),
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) =>
      (company.commonStockIssued),
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) =>
      (company.freeCashFlow),
  },
];

const CashFlowStatement = (props: Props) => {
  const ticket = useOutletContext<string>();
  const [cashFlow, setCashFlow] = useState<CompanyCashFlow[]>();
  useEffect(() => {
    const fetchCashFlow = async () => {
      const value = await getCashFlowStatement(ticket!);
      setCashFlow(value!.data);
    };
    fetchCashFlow();
  }, []);
  return (
    <>
      {cashFlow ? <Table config={config} data={cashFlow} /> : <><Spinner isLoading/></>}
    </>
  );
};

export default CashFlowStatement;
