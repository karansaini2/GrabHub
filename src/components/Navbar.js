import { Link } from "react-router-dom"
import React from 'react'

const Navbar = () => {
  return (
    <nav className="p-5 bg-white shadow flex justify-between ">
<div className="">
    <span className="text-2xl">EatStreet</span>

</div>


<ul className="flex mx-3">
    <li className="mx-2">
        <Link to="/" className="text-xl hover:text-cyan-500 duration-500">Home</Link>
    </li>
    <li className="mx-2">
        <Link to="/login" className="text-xl hover:text-cyan-500 duration-500">Login</Link>
    </li>
 
</ul>
    </nav>
  )
}

export default Navbar