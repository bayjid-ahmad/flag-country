import { useEffect, useState } from "react";
import Country from "./Country";

export default function Countries(){
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries]=useState([])

    useEffect(()=>{
        fetch('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then(res => res.json())
        .then(data =>setCountries(data))
    },[])

 

    const handleVisitedCountry = (country, isVisited) => {
        setVisitedCountries(currentCountries => {
            if (isVisited) {
                return currentCountries.some(visitedCountry => visitedCountry.cca3 === country.cca3)
                    ? currentCountries
                    : [...currentCountries, country]
            }

            return currentCountries.filter(visitedCountry => visitedCountry.cca3 !== country.cca3)
        })
    }
    return(
        <div>
            <h1>Country: {countries.length}</h1>
            <div>
                <h1>visited Countries:</h1>
                <ul className="countryList">
                    {visitedCountries.map(country => (
                        <li key={country.cca3}>
                            {country.name.common}
                        </li>
                    ))}
                </ul>
            </div>
            {/* {console.log(countries)} */}
            <div className="country-container">
                {countries.map(country=><Country
                 key={country.cca3}
                 handleVisitedCountry={handleVisitedCountry}
                 country={country}>    
                </Country>
            )}
            </div>
        </div>
    )
}