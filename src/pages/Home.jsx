import React from 'react'
import { Link } from "react-router-dom"
import vanlinfe from "../assets/vanlife2.png"
import "./Home.css"

const Home = () => {
  return (
    <div className='home__container'>
        <img src={vanlinfe} alt="home_van"/>
        <div className='home__container-text'>
            <h1>You got the travel plans, we got the travel vans</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="vans" className='home__container-link'>Find your van</Link>
        </div>
    </div>
  )
}

export default Home