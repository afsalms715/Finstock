import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePaage/HomePage";
import SearchPage from "../pages/SearchPage/SearchPage";
import ComponyPage from "../pages/ComponyPage/ComponyPage";
import CompanyProfile from "../components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../components/IncomeStatement/IncomeStatement";
import DesignGuid from "../pages/DesignGuid/DesignGuid";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
        ],
      },
      {path:"design-guid",element:<DesignGuid/>}
    ],
  },
]);
