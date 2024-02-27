import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Hero from './Pages/Hero'
import Card from './Components/Card'
import Login from './Pages/Login'
import './App.css'
import Register from './Pages/Register'
import Footer from './Components/Footer'
import ContactUs from './Pages/ContactUs'
import About from './Pages/About'
import {Outlet} from 'react-router-dom'
function App() {
  
  return (
    <>
         <Navbar/>
          <Outlet/>
        <Footer/>
    </>
  )
}

export default App
