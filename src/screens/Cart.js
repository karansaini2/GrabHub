import React from 'react'
import { useCart, useDispatch } from '../components/ContextReducer'
import Navbar from '../components/Navbar';

const Cart = () => {
    const data = useCart();
    const dispatch = useDispatch();
      if(data.length === 0){
        return (
            <div className='flex flex-col text-xl'>
                <Navbar/>
                <div className='text-center my-5 text-2xl'>Cart is Empty</div>
            </div>
        )
      }
      let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
<>
    <Navbar/>
        

<div className="relative overflow-x-auto ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                   #
                </th>
                <th scope="col" className="px-6 py-3">
                    Food Item
                </th>
                <th scope="col" className="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                    Option
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Remove
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((food, index) => (
              <tr>
                <th scope="col" className="px-6 py-3">{index + 1}</th>
                <td className="px-6 py-3 text-gray-700">{food.name}</td>
                <td className="px-6 py-3 text-gray-700">{food.qty}</td>
                <td className="px-6 py-3 text-gray-700">{food.size}</td>
                <td className="px-6 py-3 text-gray-700">{food.price}</td>
                <td className="px-6 py-3 text-gray-700"><button  className="bg-red-500 text-white rounded-sm p-1" onClick={()=>{dispatch({type:"REMOVE",index:index})}}>Delete</button></td>
                </tr>
        ))}
        </tbody>
        
    </table>
    <hr></hr>
    <div><h1 className='text-md mx-5 my-5'>Total Price: {totalPrice}/-</h1></div>
    <button className='bg-green-600 mx-5 text-white rounded-md p-1.5 w-28' >Checkout</button>

</div>
</>


  
  )
}

export default Cart