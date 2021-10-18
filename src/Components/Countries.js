//import { Languages } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';

//import { Link } from 'react-router-dom';

//const url = "https://restcountries.com/v2/all";
//const url1 = `https://restcountries.com/v2/lang/${lang}`;


const Countries = () => {
    const [countries, setCountries ] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredCountries , setFilteredCountries] = useState([]);

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
            </tr>
           </thead>
           </table>
           <table>
           {filteredCountries.map((country) => {
           const {numericCode, name, population, languages, region, flag } = country
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
    {/* return ( 
        
        <>
        
            
        {countries.map((country) => {
           const {numericCode, name, population, languages, region, flag } = country
           return <article key={numericCode}>
                   <div>
                <img src={flag} alt={name} />
                <h3>{name}</h3>
                <h3>Population: {population}</h3>
                <h3>Language: {languages[0].name}</h3>
                <h3>Region: {region}</h3>
               
                </div>  
                </article>
       })} */}
    </>
    );
}


export default Countries;