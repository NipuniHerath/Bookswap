import React from 'react'
import {FcGoogle} from "react-icons/fc"
import {FaFacebookSquare} from "react-icons/fa"
import LoginImg from "../assets/login1.jpg"
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div className='relative w-full h-screen bg-gray-600'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay ' src={LoginImg} alt="" />
      
      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full max-auto bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-8'> Bookswap</h2>
            <div className='flex flex-col mb-8'>
             
                <input className='border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100' type="text" placeholder='First Name'/>
            </div>
            <div className='flex flex-col mb-8'>
          
                <input className='border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100'type="text" placeholder='Last Name' />
            </div>


            
            <button className='w-full py-3 mt-7 bg-amber-400 hover:bg-slate-500 relative text-black hover:text-white '>Sign In</button>
         
            





            <p className='flex items-center mt-4 relative '>Forgot password</p>
              

              {/* <a href="/register"><p className=' text-center mt-9'>Not a member? Register now</p> </a> */}

              <Link to={"/register"}>
 
              <button className='w-full py-3 mt-8 bg-white relative text-black'>Not a member? Register now</button>
              </Link>  
                 
             {/* <a href="/register"><p className=' text-center mt-9'>Not a member? Register now</p> </a>  */}
           
            <div className='flex justify-between py-8'>
                <p className='border bg-amber-400 shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center hover:bg-slate-500 text-black hover:text-white'><FaFacebookSquare className='mr-2'/>Facebook</p>
                <p className='border bg-amber-400 shadow-lg hover:shadow-xl px-7 py-2 relative  flex items-center hover:bg-slate-500 text-black hover:text-white'><FcGoogle className='mr-2'/>Google</p>
            </div>
        </form>
      </div>
      
      
    </div>
  )
}
