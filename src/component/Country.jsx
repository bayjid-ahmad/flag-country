import { useState } from 'react';
import '../component/Country.css'
const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, population, area}=country
    const [visited, setVisited] = useState(false)
    const handleMarkVisited =()=>{
        const nextVisited = !visited
        setVisited(nextVisited)
        handleVisitedCountry(country, nextVisited)
    }
    return (
        <div className={visited? 'visited country' : 'not-visited country'}>
            <h1>Name: {name.common}</h1>
            <img src={flags.png} alt="" />
             <h1>Population: {population}</h1>
             <h1>area: {area}</h1>
            <button onClick={handleMarkVisited}>{visited ? 'visited' : 'not visited'}</button>
            <h1>{visited ?'i Have visited this country' : 'i have not visited'}</h1>
            
        </div>
    );
};

export default Country;