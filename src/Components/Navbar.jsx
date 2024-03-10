import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
function Navbar() {
    const [toggle, setToggle] = useState(false)
    const ontoggle = () =>{
        setToggle(!toggle)
    }
  return (
    <>
    <div> 
        <nav className='w-full relative md:h-20 flex justify-between bg-slate-700 text-white items-center'>
            <div> <p className='text-3xl px-3'>FitFeves</p> </div>
        {toggle ? <>
            <div className='flex flex-col absolute bg-slate-700 top-9 w-screen h-screen gap-2'>
            <ul className='h-auto mt-4 font-bold flex flex-col text-center text-lg  gap-2'>
            <li className='px-2 cursor-pointer hover:bg-slate-500' onClick={()=>setToggle(!toggle)}><NavLink  to='/' className={({isActive}) => `${isActive ? 'text-yellow-500': 'text-white'}`}> Home </NavLink></li>
                <li className='px-2 cursor-pointer hover:bg-slate-500' onClick={()=>setToggle(!toggle)}><NavLink to='/blog' className={({isActive}) => `${isActive ? 'text-yellow-500': 'text-white'}`}> Blog </NavLink></li>
                <li className='px-2 cursor-pointer hover:bg-slate-500' onClick={()=>setToggle(!toggle)}><NavLink to='/career' className={({isActive}) => `${isActive ? 'text-yellow-500': 'text-white'}`}> Career </NavLink></li>
                <li className='px-2 cursor-pointer hover:bg-slate-500' onClick={()=>setToggle(!toggle)}><NavLink to='/about' className={({isActive}) => `${isActive ? 'text-yellow-500': 'text-white'}`}> About Us </NavLink></li>
                <li className='px-2 cursor-pointer hover:bg-slate-500' ><NavLink to='/contact' className={({isActive}) => `${isActive ? 'text-yellow-500': 'text-white'}`}> Contact Us </NavLink></li>
            </ul>
            {/* <div className='text-center'>
                <div className='bg-indigo-700 font-bold w-[80px] text-center rounded-lg'>Login</div>
            </div> */}
            </div>
            </>
            :
            <>
            <ul className='font-bold hidden md:flex'>
                <li className='px-2 cursor-pointer hover:text-yellow-500'><NavLink  to='/' className={({isActive}) => `${isActive ? 'text-yellow-500': 'text-white'}`}> Home </NavLink></li>
                <li className='px-2 cursor-pointer hover:text-yellow-500'><NavLink to='/blog' className={({isActive}) => `${isActive ? 'text-yellow-500': 'text-white'}`}> Blog </NavLink></li>
                <li className='px-2 cursor-pointer hover:text-yellow-500'><NavLink to='/career' className={({isActive}) => `${isActive ? 'text-yellow-500': 'text-white'}`}> Career </NavLink></li>
                <li className='px-2 cursor-pointer hover:text-yellow-500'><NavLink to='/about' className={({isActive}) => `${isActive ? 'text-yellow-500': 'text-white'}`}> About Us </NavLink></li>
                <li className='px-2 cursor-pointer hover:text-yellow-500'><NavLink to='/contact' className={({isActive}) => `${isActive ? 'text-yellow-500': 'text-white'}`}> Contact Us </NavLink></li>
            </ul>
            <div className='px-5 hidden md:flex'>
                {/* <div className='px-2'>
                    <input className='w-[100px] rounded-xl text-black' type="text" name="search" id=""/> <button type='button' className='bg-indigo-700 font-bold w-[80px] text-center rounded-lg'>Search</button>
                </div> */}
                {/* <div className='bg-indigo-700 font-bold w-[80px] text-center rounded-lg cursor-pointer'> <NavLink to='login'> Login </NavLink></div> */}
            </div></>}

            <div className='md:hidden block text-4xl px-2' onClick={()=> ontoggle()}>{toggle ?<FaRegWindowClose/>:<FaBars/>}</div>
        </nav>
    </div>
    </>
  )
}

export default Navbar