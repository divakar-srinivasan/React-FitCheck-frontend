import React from 'react'
import logo from '../../images/logo.png'
import { MdReportProblem ,MdEmail , MdOutlineMailLock } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Contact = () => {
  return (
    <>
    <div className='w-full h-full pb-10'>
      <div className='bg-black w-full h-16 flex justify-center items-center'>
      <img src={logo} alt='loading' className="h-10" />
       <h1 className='text-white text-2xl'>| Help Center</h1>
      </div>
      <div className='w-full flex flex-col p-10 space-y-2'>
        <h1 className='text-3xl font-bold pb-3'>Contact us</h1>
        <h1>Tell us more and we'll find the best solution for you</h1>
        <input className='border-2 w-1/2 border-gray-500 py-2 px-8 outline-none hover:border-gray-700' 
        type='text' placeholder='Describe your issue' />
      </div>
      <div className='w-full flex flex-col px-10 space-y-2'>
      <h1 className='text-xl font-bold pb-3'>Quick Links</h1>
        <div className='px-16 space-y-6'><hr className=' border-gray-700' />
        <h1 className='font-bold flex items-center gap-3 cursor-pointer hover:text-custom-red'><MdEmail className='text-xl' />Mail us</h1><hr className=' border-gray-700' />
        <h1 className='font-bold flex items-center gap-3 cursor-pointer hover:text-custom-red'><MdReportProblem className='text-xl' />Get help Signing in</h1><hr className=' border-gray-700' />
        <h1 className='font-bold flex items-center gap-3 cursor-pointer hover:text-custom-red'><RiLockPasswordFill className='text-xl' />Reset Password</h1><hr className=' border-gray-700' />
        <h1 className='font-bold flex items-center gap-3 cursor-pointer hover:text-custom-red'><MdOutlineMailLock className='text-xl' />Update email</h1><hr className=' border-gray-700' />
        </div>
      </div>
      <div className='w-full flex flex-col py-10 px-10 space-y-2'>
        <h1 className='text-xl text-blue-700 font-bold pb-3'>Your Feedback Improves Our Product</h1>
        <input className='border-2 border-gray-400 hover:border-gray-600 outline-none p-5'
         type='text' placeholder='Enter your Suggestions' />
         <div className='flex items-center justify-center'>
         <button className='bg-sky-700 w-36 h-12 rounded-lg hover:text-white hover:scale-105 hover:bg-blue-950 transition-all duration-150'>Send Feedback</button>
         </div>
      </div>
      <div className='flex justify-center items-center space-x-5'>
      <h1 className='text-5xl hover:scale-110 cursor-pointer'>😞</h1>
      <h1 className='text-5xl hover:scale-110 cursor-pointer'>☹️</h1>
      <h1 className='text-5xl hover:scale-110 cursor-pointer'>😌</h1>
      <h1 className='text-5xl hover:scale-110 cursor-pointer'>🤗</h1>
      <h1 className='text-5xl hover:scale-110 cursor-pointer'>🤩</h1>
     </div>
    </div>
    </>
  )
}

export default Contact