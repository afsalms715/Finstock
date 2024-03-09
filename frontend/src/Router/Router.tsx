import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePaage/HomePage";
import SearchPage from "../pages/SearchPage/SearchPage";
import ComponyPage from "../pages/ComponyPage/ComponyPage";

export const router=createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[
        {path:"",element:<HomePage/>},
        {path:"search",element:<SearchPage/>},
        {path:"company/:ticker",element:<ComponyPage/>}
    ]
}])