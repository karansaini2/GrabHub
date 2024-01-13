import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./ContextReducer";
const Navbar = () => {
  const navigate = useNavigate();
  const data = useCart();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/loginuser");
  };
  return (
    <nav className="p-5 bg-white shadow flex justify-between ">
      <div className="">
        <span className="text-2xl">EatStreet</span>
      </div>

      <ul className="flex mx-3">
        <li className="mx-2">
          <Link to="/" className="  text-xl hover:text-cyan-500 duration-500">
            Home
          </Link>
        </li>

        {localStorage.getItem("authToken") ? (
          <li className="mx-2">
            <Link
              to="/myorders"
              className="  text-xl hover:text-cyan-500 duration-500"
            >
              My Orders
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>

      {!localStorage.getItem("authToken") ? (
        <div>
          <Link
            to="/loginuser"
            className="text-lg mx-2 p-1.5 bg-green-600 text-white rounded-md hover:text-black duration-500"
          >
            Login
          </Link>

          <Link
            to="/createuser"
            className="text-lg mx-2 p-1.5 bg-green-600 text-white rounded-md hover:text-black duration-500"
          >
            Signup
          </Link>
        </div>
      ) : (
        <div className="flex">
          <div className="text-lg text-center cursor-pointer mx-2 p-1.5 bg-green-600 text-white rounded-md hover:text-black duration-500">
            <Link to={"/cart"}>My Cart</Link>

            <div className=" text-center mx-2 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gray-800 border-2 border-white rounded-full -top-2 -end-2 d">
              {data.length}
            </div>
          </div>
          <div
            className="text-lg text-center cursor-pointer mx-2 p-1.5 bg-green-600 text-white rounded-md hover:text-black duration-500"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
