import React from 'react'


const Filter = () => {
    const [setSearch] = ['']
    return(
       <>
         <select className="filter2">
        <form className="form">
        <input type="search" name="search" placeholder="Search for any country..." handleChange={(e) => setSearch(e.target.value)}/>
        </form>
        </select>
            </>
        );

}

export default Filter;
