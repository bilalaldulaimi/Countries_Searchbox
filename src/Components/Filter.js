import React from 'react';
import Countries from './Components/Countries';
import React, { useState, useEffect } from 'react';

const Filter = () => {
    const [search, setSearch] = useState("");
    const [filteredCountries , setFilteredCountries] = useState([]);
    
    useEffect(() => {
    setFilteredCountries(
        countries.filter(country => {
            return country.name.toLowerCase().includes(search.toLowerCase())
        })
    )
}, [search, countries]);

    return(
       <>
         <form className="form">
        <input type="search" name="search" placeholder="Search for any country..." onChange={(e) => setSearch(e.target.value)}/>
        </form>
            </>

            
        );

}

export default Filter;
