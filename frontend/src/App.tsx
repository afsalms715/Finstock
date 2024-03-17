import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import { Outlet } from "react-router";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer/>
    </>
  );
}

export default App;
