import React from 'react'
import { Link } from "react-router-dom"
import "../../server"
import "./HostVans.css"

const HostVans = () => {
    const [vans, setVans] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(response => response.json())
            .then(data => setVans(data.vans))
    }, []);

    const hostVansEl = vans.map((van) => (
        <Link to={`/host/vans/${van.id}`} key={van.id} className="hostVans__container">
            <div className='hostVans__single' key={van.id}>
                <img src={van.imageUrl} alt=""/>
                <div className='hostVans__info'>
                    <h3>{van.name}</h3>
                    <p>{van.price}/day</p>
                </div>
            </div>
        </Link>
    ));

    return (
        <div className='hostVans'>
            <h1 className='hostVans__title'>Your listed vans</h1>
            <div className='hostVans__list'>
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEl}
                        </section>
                    ) : (
                        <h2>Loading...</h2>
                        )
                }
            </div>
        </div>
    )
}

export default HostVans;
