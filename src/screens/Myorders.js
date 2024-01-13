import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'


const Myorders = () => {



    const[orderData,setOrderData] = useState("");
    const fetchMyOrder = async () => {
        try {
            const userEmail = localStorage.getItem('userEmail');
            // console.log(userEmail);
    
            const response = await fetch("http://localhost:5000/api/myorders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: userEmail
                })
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const responseData = await response.json();
            setOrderData(responseData);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error appropriately (e.g., show an error message to the user)
        }
    }
    
    useEffect(() => {
        fetchMyOrder();
    }, []);
   
  return (
    <>
                <div>
                <Navbar />
            </div>

            <div className='flex flex-col flex-wrap p-2 '>
                <div className=''>

                    {orderData !== "" ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                              
                                                <div >
                                                    {arrayData.Order_date ? <div className='m-auto mt-5'>

                                                        {data = arrayData.Order_date}
                                                        
                                                    </div> :

                                                        <div className='' >
                                                           
                                                             
                                                                <div className=" text-sm bg-gray-800 text-stone-200 h-28  p-1 w-96">
                                                                    <h5 className="m-1 bg-slate-700 rounded-sm p-0.5">{arrayData.name}</h5>
                                                                    <div className='' >
                                                                        <span className='m-1'>Qty : {arrayData.qty} |</span>
                                                                        <span className='m-1'>{arrayData.size.toUpperCase()} |</span>
                                                                        <span className='m-1'>{data}</span>
                                                                        <div className='m-1 inline p-0.5 rounded-md ,x-4 bg-green-500'>
                                                                            ₹ {arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                    



                                                    }

                                                </div>
                                               
                                            )
                                        })

                                    )
                                }) : <div text-xl text-black text-center>Error Somewhere in fetching the data</div>
                        )
                    }) : <div className='text-xl text-black text-center'>Nothing in the Order List </div>}
                </div>


            </div>



    </>
  )
}

export default Myorders