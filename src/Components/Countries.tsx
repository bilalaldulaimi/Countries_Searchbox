//import { Languages } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { Country } from '../types';

type CountryProps = {
    countries: Country[];
    
}

const Countries = () => {
    const [countries, setCountries ] = useState<Country[]>([]);
    const [search, setSearch] = useState("");
    const [filteredCountries , setFilteredCountries] = useState<Country[]>([]);

      const fetchCountryData = async () => {
        const response = await fetch("https://restcountries-v2.herokuapp.com/all")
        const countries = await response.json()
        setCountries(countries);
       // console.log(countries);
    };
    useEffect(() => {
    fetchCountryData()
   
}, []);

useEffect(() => {
    setFilteredCountries(
        countries.filter(country => {
            return country.name.toLowerCase().includes(search.toLowerCase())
        })
    )
}, [search, countries]);

return ( 
        <>
    <form className="form">
    <input type="search" name="search" placeholder="Search for any country..." onChange={(e) => setSearch(e.target.value)}/>
    </form>
 
        <section className="details">
        <table>
           <thead>
           <tr>
            <th>Flag </th>
            <th>Name </th>
            <th>Population</th>
            <th>Lnaguage</th>
            <th>Region</th>
            <th>Translations</th>
            </tr>
           </thead>
           </table>
           <table>
           {filteredCountries.map((country) => {
           const {numericCode, name, population, languages, region, flag} = country
           return ( 
               
                  <tbody key={numericCode}>
                  
                <tr>
                <td className="flag"><img src={flag} alt={name} /></td>
                <td>{name}</td>
                <td>{population}</td>
                <td>{languages.map((l) => (<li>{l.name}</li>))}</td>
                <td>{region}</td>
                </tr>
                </tbody>
           )
       })}
            </table>
        </section>
    </>
    );
}


export default Countries;
