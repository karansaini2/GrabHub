import React from 'react'
const Card = (props) => {

let options = props.options;
let priceOptions = Object.keys(options);



  return (
    <div className="color-black ">
    <div className="w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg"
        src={props.imgSrc}
        alt=""
        style={{height:"120px",objectFit:"cover",width:"250px"}}
      />

  

      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
         {props.foodName}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
         {props.recipie}
        </p>
        <div className="">
            <select className="m-2 h-100 w-100">
                {Array.from(Array(6),(e,i)=>{
                    return (
                        <option key={i+1} value={i+1}>{i+1}</option>
                    )
                })}
            </select>

            <select className="m-2 h-100 w-100 rounded-md">
                {priceOptions.map((data)=>{
                  return <option key={data} value={data}>{data}</option>
                })}

            </select>
            <div className="bg-green-600 w-32 rounded-md text-center">Total Price</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card