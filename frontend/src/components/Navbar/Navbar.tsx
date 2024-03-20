import { useAuth } from "../../Context/UserContext";
import finstockLogo from "./finstockLogo.png";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const { isLogin, logoutUser, user } = useAuth();
  console.log(user);
  console.log(isLogin());
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white px-6 md:mx-20 ">
      <div className="flex items-center flex-shrink-0  md:mr-6">
        <Link to="/search">
          <img src={finstockLogo} className="w-20 h-13" />
        </Link>
      </div>
      <div className="flex-grow flex lg:items-center md:w-auto ">
        <div className="text-sm  lg:w-[45%]">
          {isLogin() && (
            <Link
              to="/search"
              className="block mt-1 lg:inline-block lg:mt-0  hover:text-blue-800 mr-4 pl-5"
            >
              Search
            </Link>
          )}
        </div>
        <div className="w-[80%] lg:w-[50%]">
          {!isLogin() ? (
            <>
              <Link
                to="/signup"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent bg-teal-500 mt-0 float-end"
              >
                Signup
              </Link>
              <Link
                to="/login"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparen mx-3  mt-0 float-end"
              >
                Login
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={logoutUser}
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparen mx-3  mt-0 float-end"
              >
                Logout
              </button>
              <div className="inline-block text-gray-500 text-sm mx-3  mt-1 float-end ">Welcome {user?.username}</div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
