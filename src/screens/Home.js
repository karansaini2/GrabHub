import React from 'react'
import Card from "../components/Card";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
    <div>
    <Navbar />
  </div>
 <div className="flex">
    <Card/>
    <Card/>
 </div>
 </>
  )
}

export default Home