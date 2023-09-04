import React from 'react'
import { Link, NavLink, Outlet } from "react-router-dom"
import "./HostLayout.css"

const HostLayout = () => {
  const activeStyle = {
    fontWight: "bold",
    borderBottom: "2px solid black"
  }

  return (
    <div>
        <nav className='host__link'>
            <NavLink to="." end style={({isActive}) => isActive ? activeStyle : null}>Dashboard</NavLink>
            <NavLink to="income" style={({isActive}) => isActive ? activeStyle : null}>Income</NavLink>
            <NavLink to="vans" style={({isActive}) => isActive ? activeStyle : null}>Vans</NavLink>
            <NavLink to="reviews" style={({isActive}) => isActive ? activeStyle : null}>Reviews</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}

export default HostLayout