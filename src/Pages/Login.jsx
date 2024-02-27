import React from 'react'
import {BiUser} from "react-icons/bi"
import {AiOutlineUnlock} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate = useNavigate()
  return (
    <div className='text-white w-screen h-screen flex justify-center items-center bg-cover bg-center' style={{"backgroundImage": "url('./src/assets/images/img10.jpg')"}}>     
    <div>
      <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
        <h1 className='text-4xl text-white font-bold text-center mb-6'>Login</h1>
        <form action="">
        <div className='relative my-4'>
          <input placeholder='' type="email" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'/>
          <label className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-[0.2rem] -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your Username</label>
          <BiUser className='absolute top-1 right-4' />
        </div>
        <div className='relative my-4'>
          <input placeholder='' type="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'/>
          <label className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-[0.2rem] -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your Password</label>
          <AiOutlineUnlock  className='absolute top-1 right-4'/>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <input type="checkbox" name="" id="" />
            <label htmlFor="Remember Me">Remember Me</label>
          </div>
            <span className='text-blue-700'>Forgot Password?</span>
        </div>
          <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2' type='submit' onClick={()=> navigate('/')}>Login</button>
        <div>
          <span className='m-4'>New Here? <span className='text-blue-700 cursor-pointer' onClick={()=> navigate('/register')}>create a account</span> </span>
        </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login