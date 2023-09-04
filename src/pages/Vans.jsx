import React from 'react'
import { Link, useSearchParams } from "react-router-dom"
import "./Vans.css"


const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])

    const typeFilter = searchParams.get("type")

    React.useEffect(()=>{
        fetch("api/vans")
            .then(Response => Response.json())
            .then(data => setVans(data.vans))
    }, [])

    const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

    const vanElement = displayedVans.map((van)=>{
        return (
        <div key={van.id} className='van__title'>
            <Link className='vans__link' to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt=""/>
                <div className='van__info'>
                    <h3>{van.name}</h3>
                    <p className='van__price'>{van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} seleceted`}>{van.type}</i>
            </Link>
        </div>)
    })

  return (
        <div className='van__list-container'>
            <h1>Explore our van options</h1>
            <div className='van__list-filter-buttons'>
                <Link to="?type=simple" className='links'>Simple</Link>
                <Link to="?type=rugged" className='links'>Rugged</Link>
                <Link to="?type=luxury" className='links'>Luxury</Link>
                <Link to="." className='links__clearfilter'>Clear filter</Link>
            </div>
            <div className='van__list'>
                {vanElement}
            </div>
        </div>
  )
}

export default Vans