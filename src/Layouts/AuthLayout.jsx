import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar.jsx'

export default function AuthLayout() {
  return (
    <>
      <Navbar auth={true}/>
      <div className='w-50 m-auto my-5'>
      <Outlet/>
      </div>
    </>
  )
}
