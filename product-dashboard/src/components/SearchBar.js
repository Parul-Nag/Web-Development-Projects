import React from 'react'

function SearchBar({onSearchChange}){
    const handleSearchChange=(event)=>{
        onSearchChange(event.target.value);
    };

    return(
        <div>
            <label>Search By Title: </label>
            <input
                type='text'
                placeholder='Search...'
                onChange={handleSearchChange}
            />
        </div>
    );
}

export default SearchBar;