import React from 'react'
import { Link, NavLink } from "react-router-dom"
import avatar__logo from "../assets/avatar__login.png"
import "./Header.css"

const Header = () => {
  const activeStyle = {
    fontWight: "bold",
    borderBottom: "2px solid black"
  }
  return (
        <header>
                <Link className='link__vanlife' to="/">#Vanlife</Link>
                <nav>
                    <NavLink className='link__about' to="/host" style={({isActive}) => isActive ? activeStyle : null}>Host</NavLink>
                    <NavLink className='link__about' to="/about" style={({isActive})=> isActive ? activeStyle : null}>About</NavLink>
                    <NavLink className="link__about" to="/vans" style={({isActive}) => isActive ? activeStyle : null}>Vans</NavLink>
                    <Link to="login" className='login__link'>
                      <img src={avatar__logo} style={{width: 30}} />
                    </Link>
                </nav>
            </header>
  )
}

export default Header