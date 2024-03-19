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
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <LogingPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "", element: <HomePage /> },
      { path: "search", element: <ProtectedRoute><SearchPage /></ProtectedRoute> },
      {
        path: "company/:ticker",
        element: <ProtectedRoute><ComponyPage /></ProtectedRoute>,
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
