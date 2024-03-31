import React from 'react'
import {BiUser} from "react-icons/bi"
import {AiOutlineUnlock} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
function Register() {
  const navigate = useNavigate()
  return (
    // <div className='text-white w-screen h-screen flex justify-center items-center bg-cover bg-center' style={{"backgroundImage": "url('./src/assets/images/img10.jpg')"}}>     
    // <div>
    //   <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
    //     <h1 className='text-4xl text-white font-bold text-center mb-6'>Register</h1>
    //     <form action="">
    //     <div className='relative my-4'>
    //       <input placeholder='' type="email" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'/>
    //       <label className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-[0.2rem] -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your Username</label>
    //       <BiUser className='absolute top-1 right-4' />
    //     </div>
    //     <div className='relative my-4'>
    //       <input placeholder='' type="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'/>
    //       <label className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-[0.2rem] -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
    //       <AiOutlineUnlock  className='absolute top-1 right-4'/>
    //     </div>
    //     <div className='relative my-4'>
    //       <input placeholder='' type="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'/>
    //       <label className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-[0.2rem] -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Confirm Password</label>
    //       <AiOutlineUnlock  className='absolute top-1 right-4'/>
    //     </div>
    //       <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2' type='submit' onClick={()=> navigate('/')}>Register</button>
    //     <div>
    //       <span className='m-4'>Already Created an Account? <span className='text-blue-700 cursor-pointer' onClick={()=> navigate('/login')}>Login</span> </span>
    //     </div>
    //     </form>
    //   </div>
    // </div>
    // </div>
    <div class="min-h-screen py-40" style={{"backgroundImage": 'linear-gradient(115deg, #9F7AEA, #FEE2FE)'}}>
      <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{"backgroundImage": "url('./src/assets/images/img3.jpg')"}}>
            <h1 class="text-white text-3xl mb-3">Welcome</h1>
            <div>
              <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" class="text-purple-500 font-semibold">Learn more</a></p>
            </div>
          </div>
          <div class="w-full lg:w-1/2 py-16 px-12">
            <h2  class="text-3xl mb-4">Register</h2>
            <p class="mb-4">
              Create your account. It’s free and only take a minute
            </p>
            <form action="#">
              <div class="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Firstname" class="border border-gray-400 py-1 px-2"/>
                <input type="text" placeholder="Surname" class="border border-gray-400 py-1 px-2"/>
              </div>
              <div class="mt-5">
                <input type="text" placeholder="Email" class="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              <div class="mt-5">
                <input type="password" placeholder="Password" class="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              <div class="mt-5">
                <input type="password" placeholder="Confirm Password" class="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              <div class="mt-5">
                <input type="checkbox" class="border border-gray-400"/>
                <span>
                  I accept the <a href="#" class="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#" class="text-purple-500 font-semibold">Privacy Policy</a> 
                </span>
              </div>
              <div class="mt-5">
                <button class="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register