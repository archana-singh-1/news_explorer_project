"use client";
import { useState } from 'react';
import './search.css';

const Search =({OnSearchQuery})=>{
    const[searchQuery,setSearchQuery]=useState('');

    const handleButtonClick=()=>{
        OnSearchQuery(searchQuery);
    };

    return (
        <div className="search_header">
            <input
                type="text"
                className="search_input"
                placeholder="Search"
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}

                
            />
            <button onClick={handleButtonClick}>Go</button>
        </div>
    );
}
export default Search;

