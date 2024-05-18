import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

function Detail() {
  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-15 mx-auto flex flex-wrap">
    <div class="flex flex-wrap">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-[400px] object-cover object-center block" src="./src/assets/img1.jpg"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
      <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-[300px] object-cover object-center block" src="./src/assets/img1.jpg"/>
        </div>
        <div class="md:p-2 h-[100px] p-1 w-1/4">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="./src/assets/img1.jpg"/>
        </div>
        <div class="md:p-2 h-[100px] p-1 w-1/4">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="./src/assets/img1.jpg"/>
        </div>
        <div class="md:p-2 h-[100px] p-1 w-1/4">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="./src/assets/img1.jpg"/>
        </div>
        <div class="md:p-2 h-[100px] p-1 w-1/4">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="./src/assets/img1.jpg"/>
        </div>
      </div>
    </div>
    <div className='w-full flex justify-between mt-2' >
      <div className='w-1/2 p-1'>
      <div class="flex w-full mt-1 flex-wrap justify-between items-center">
      <h1 class="md:text-4xl underline text-2xl font-semibold title-font text-gray-900">Stone Fitness Gym</h1>
      <p className='bg-green-600 text-white w-[55px] h-[35px] text-xl font-semibold '>4.4⭐</p>
    </div>
    <div class="flex w-full mt-1 flex-wrap flex-col">
      <div className='flex'>
      <FaLocationDot size={20} color='blue'/>
      <h1 class="md:text-md  title-font text-gray-700">Vapi</h1>
      </div>
      <p className='text-lg text-gray-900'>Address</p>
      <p className='text-md text-gray-600 w-full'>Validaan Plaza, opp. Shoppers Stop, Koliwad, Vapi East, Imran Nagar, Vapi, Gujarat 396191</p>
    </div>
    <div class="flex w-full mt-1 flex-wrap flex-col">
      <h1 class="md:text-xl font-semibold title-font text-gray-900">Activities Available</h1>
      <p className='text-lg text-gray-700'>Gym</p>
    </div>
      </div>
      <div className='w-1/2  h-36 mt-4'>
            <div className='flex justify-around h-1/2 '>
            <div className='rounded cursor-pointer text-center w-[70px] h-[30px] bg-indigo-800 text-white text-lg font-semibold'>share</div>
            <div className='rounded cursor-pointer text-center w-[80px] h-[30px] bg-indigo-800 text-white text-lg font-semibold'>direction</div>
            <div className='rounded cursor-pointer text-center w-[70px] h-[30px] bg-indigo-800 text-white text-lg font-semibold'>call us</div>
            </div>
            <div className='my-3 mx-auto shadow-2xl w-2/3 h-1/2 text-center' >
                  <p className='text-xl font-semibold text-gray-800'>Book Your free trial with <span className='font-bold underline'>fitfaves</span></p>
                  <button className='rounded-lg cursor-pointer p-2 text-center w-[90px] h-[40px] bg-indigo-800 text-white text-lg font-bold'>Book</button>
            </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Detail