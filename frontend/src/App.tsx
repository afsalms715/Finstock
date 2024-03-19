import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import { Outlet } from "react-router";
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "./Context/UserContext.tsx";

function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Outlet />
        <ToastContainer/>
      </UserProvider>
    </>
  );
}

export default App;
