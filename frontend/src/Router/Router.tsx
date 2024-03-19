import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePaage/HomePage";
import SearchPage from "../pages/SearchPage/SearchPage";
import ComponyPage from "../pages/ComponyPage/ComponyPage";
import CompanyProfile from "../components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../components/IncomeStatement/IncomeStatement";
import DesignGuid from "../pages/DesignGuid/DesignGuid";
import BalanceSheet from "../components/BalanceSheet/BalanceSheet";
import CashFlowStatement from "../components/CashFlowSatement/CashFlowStatement";
import LogingPage from "../pages/LoginPage/LogingPage";
import SignupPage from "../pages/SignupPage/SignupPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <LogingPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "", element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      {
        path: "company/:ticker",
        element: <ComponyPage />,
        children: [
          {
            path: "company-profile",
            element: <CompanyProfile />,
          },
          {
            path: "income-statement",
            element: <IncomeStatement />,
          },
          {
            path: "balance-sheet",
            element: <BalanceSheet />,
          },
          {
            path: "cash-flow",
            element: <CashFlowStatement />,
          },
        ],
      },
      { path: "design-guid", element: <DesignGuid /> },
    ],
  },
]);
