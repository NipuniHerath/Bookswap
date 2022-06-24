import React from 'react'
import LoginImg from "../assets/login1.jpg"
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className='relative w-full h-screen bg-gray-600'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay ' src={LoginImg} alt="" />
      
      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[450px] w-full max-auto bg-white p-8'>
            <h2 className='text-4xl font-bold text-center px-6 py-6'>Create an Account</h2>

            <div className='flex justify-between text-gray-600 py-2'>
           <p className='flex items-center relative'><input className='mr-2' type="checkbox" />MR</p>
           <p className='flex items-center relative'><input className='mr-2' type="checkbox" />MRS</p>
           
           </div>

            <div className='flex flex-col mb-4'>
              
                <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 ' type="text"placeholder='First Name' />
            </div>

            <div className='flex flex-col mb-4'>
               
                <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="text"placeholder='Last Name' />
            </div>

            <div className='flex flex-col mb-4'>
              
                <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="Email" placeholder='Email'/>
            </div>

            <div className='flex flex-col mb-4'>
                
                <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="text" placeholder='Address' />
            </div>

            <div className='flex flex-col mb-4'>
               
                <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="Password" placeholder='password' />
            </div>

            <div className='flex flex-col mb-4'>
               
                <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2'type="datetime-local" placeholder='Date' />
            </div>

            <div className='flex justify-between text-gray-600 '>
           <p className='flex items-center relative text-sm '><input className='mr-2' type="checkbox" />I agree to the terms and conditions and the privacy policy
            </p>
           

          </div>


            <button className='w-full py-3 mt-8 bg-amber-400 hover:bg-slate-500 relative text-black hover:text-white '>Sign In</button>
            <Link to={"/"}>
            <button className='w-full py-3 mt-8 bg-amber-400 hover:bg-slate-500 relative text-black hover:text-white '>Back to Login</button>
            </Link>
            {/* <p className='flex items-center mt-4'>Forgot password</p>
            <p className='text-center mt-9'>Not a member? Register now</p> */}
            
        </form>
      </div>
      
    </div>
  )
}
