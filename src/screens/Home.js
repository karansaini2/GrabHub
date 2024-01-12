import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search,setSearch] = useState("");

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    // console.log(response[0],response[1]);

    setFoodItem(response[0]);
    setFoodCat(response[1]);
    console.log(response[0],response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>

      
<div className="flex items-center">   
    <div className="relative w-full">
        
        <input type="text" id="simple-search" value={search} onChange={(e)=>setSearch(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required/>
    </div>

</div>

      <div className="flex items-start p-5 gap-4 flex-wrap  justify-center  ">
        {foodCat.length > 0
          ? foodCat.map((data) => {
              return (
                <div className="grid md:grid-cols-6 lg:grid-cols-6" >
                  <div key={data._id} className="text-md mx-2">
                    {data.CategoryName}
                  </div>
                  <hr />
                  
                  {foodItem.length > 0  ? (
                    foodItem
                      .filter((item) => item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search))) 
                      .map((filterItems) => {
                        return (
                          <div key={filterItems._id} className=""  >
                            <Card foodItem = {filterItems}
                            options={filterItems.options[0]}
                            />
                          </div>
                        
                        );
                        
                      })
                    
                  ) : (
                    <div>No such data found</div>
                  )}
                </div>
              );
            })
          : ""}
        
      </div>
    </>
  );
};

export default Home;
