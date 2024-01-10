import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Signup = () => {
    const [credentials, setcredentials] = useState({name :"",email:"",password:"",geolocation:""});

const  onChange = (e)=>{setcredentials({...credentials,[e.target.name]:e.target.value})};

    const handleSubmit =async(e)=>{
       e.preventDefault();
       const response = await fetch("http://localhost:5000/api/createuser",{
         method :'POST',
         headers : {
            'Content-Type' : 'application/json',
         },
         body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
       });
       const json = await response.json();
       console.log(json);

       if(!json.success){
        alert("Enter valid credentials")

       }
    }
  return (
    <form onSubmit={handleSubmit}>
    <div className="bg-grey-lighter min-h-screen flex flex-col">
         
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                   
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            value={credentials.name}
                            onChange={onChange}
                            placeholder="Full Name" />
    
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            value={credentials.email}
                            onChange={onChange}
                            placeholder="Email" />
    
                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            value={credentials.password}
                            onChange={onChange}
                            placeholder="Password" />
                      
                      <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="geolocation"
                            value={credentials.geolocation}
                            onChange={onChange}
                            placeholder="Address" />
    
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>
    
                      
                    </div>
    
                    <div className="text-grey-dark mt-6">
                        Already have an account? 
                        <Link to="/loginuser" className="text-md hover:text-green-500 duration-500"> Login</Link>
                    </div>
                 
                </div>
                
            </div>
            </form>
  )
}

export default Signup