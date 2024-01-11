import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout =()=>{
        localStorage.removeItem("authToken");
        navigate("/loginuser");
     }
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
            <Link to="/" className="  text-xl hover:text-cyan-500 duration-500">
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
      ) : 
      <div className="flex">
      <div className="text-lg text-center cursor-pointer mx-2 p-1.5 bg-green-600 text-white rounded-md hover:text-black duration-500">
          My Cart
        </div>
        <div className="text-lg text-center cursor-pointer mx-2 p-1.5 bg-green-600 text-white rounded-md hover:text-black duration-500" onClick={handleLogout}>
          Logout
        </div>
        </div>
      }
    </nav>
  );
};

export default Navbar;
