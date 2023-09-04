import React from 'react'
import { useParams } from 'react-router-dom'
import "./VanDetail.css"

const VanDetail = () => {
 
    const params = useParams()
    const [van, setVan] = React.useState(null)
 
    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(Response => Response.json())
        .then(data => setVan(data.vans))
    } ,[params.id])

    return (
        <div className="van__detail-container">
            {van ? (
                <div className="van__detail">
                    <img src={van.imageUrl} />
                    <i className={`van__type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van__price"><span className='van__price-price'>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link__button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}

export default VanDetail