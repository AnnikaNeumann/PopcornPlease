import React from "react";
import {useHistory} from "react-router-dom";
import './search.css'


const Search = ({ searchQuery, setSearchQuery}) => {
    const history = useHistory();
    const onSubmit = (e) =>{
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    }

    return (

    <form action="/" 
    method="get"
    autoComplete="off"
    onSubmit={onSubmit}
    >
            <label htmlFor="header-search">
            <span className="visually-hidden">Search movies</span>
        </label>
        <input
            value={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search movies"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>

    )
};

export default Search;