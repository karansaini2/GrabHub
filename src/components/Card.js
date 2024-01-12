import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useCart } from "./ContextReducer";

const Card = (props) => {
  let dispatch = useDispatch();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);

  const [qty, setqty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    //means their is something item in food array
    if (food.length > 0) {
      //if their is no change in the size means quantity has been changed and we should update it
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: finalPrice,
          size : size,
          qty: qty,
        });
        return ; 
      } else if (food.size !== size) {
        //if the quantity  is same but the size is changed means the amount if the food item full or half then simply add it insted of updating it
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          size: size,
          qty: qty,
          
        });
        return ;
      }
      return ;
    }

    //if above both conditions not hold true then simply add it in the cart

    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
  };

  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  return (
    <div className="color-black ">
      <div className="w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg"
          src={props.foodItem.img}
          alt=""
          style={{ height: "120px", objectFit: "cover", width: "250px" }}
        />

        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.foodItem.name}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.foodItem.description}
          </p>
          <div className="">
            <select
              className="m-2 h-100 w-100"
              onChange={(e) => setqty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select
              className="m-2 h-100 w-100 rounded-md"
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="bg-green-600 w-32 rounded-md text-center">
              Rs {finalPrice}
            </div>
            <hr></hr>
            <button
              className="bg-green-600 text-black rounded-md p-1"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
