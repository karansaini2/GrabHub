import React from 'react'

const Card = () => {
  return (
    <div className="color-black ">
    <div className="w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg"
        src=""
        alt=""
      />

      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
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
                <option value="half">Half</option>
                <option value="full">Full</option>

            </select>
            <div className="bg-green-600 w-32 rounded-md text-center">Total Price</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card