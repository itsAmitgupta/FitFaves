import React from 'react'
import Card from '../Components/Card'
import { SlArrowRightCircle } from "react-icons/sl"

function CardSection() {
  return (
    <div>
        <p id="card" className='text-center font-bold text-gray-800 text-3xl mt-3'>Trending Fitness Centers Near You</p>
        <Card/>
        <div className='w-full justify-center items-center flex my-3'>
        <div className='flex relative '>
        <button className='bg-yellow-500 text-white text-xl rounded hover:bg-indigo-500 hover:text-white-500 w-[150px] tracking-wide' >Explore</button>
        <SlArrowRightCircle className='absolute right-3 top-1 text-xl' color='white'/>
        </div>
        </div>
    </div>
  )
}

export default CardSection