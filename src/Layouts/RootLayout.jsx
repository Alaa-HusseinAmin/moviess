import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from '../Components/Navbar/Navbar.jsx'
export default function RootLayout() {
  return (
    <>
        <Navbar/>
        <Outlet></Outlet>
    </>
  )
}
