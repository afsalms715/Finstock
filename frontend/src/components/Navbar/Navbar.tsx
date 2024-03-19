import finstockLogo from "./finstockLogo.png";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white px-6 md:mx-20 ">
      <div className="flex items-center flex-shrink-0  md:mr-6">
        <Link to="/search"><img src={finstockLogo} className="w-20 h-13" /></Link>
      </div>
      <div className="flex-grow flex lg:items-center md:w-auto ">
        <div className="text-sm  lg:w-[45%]">
          <Link
            to="/search"
            className="block mt-1 lg:inline-block lg:mt-0  hover:text-blue-800 mr-4 pl-5"
          >
            Search
          </Link>
        </div>
        <div className="w-[80%] lg:w-[50%]">
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent bg-teal-500 mt-0 float-end"
          >
            Signup
          </a>
          <Link
            to="/login"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparen mx-3  mt-0 float-end"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
