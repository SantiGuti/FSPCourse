import React from "react";

const SearchInput = ({newSearch, searchHandler}) => {
    return (
      <div>
        Filter shown with: 
        <input value={newSearch} onChange={searchHandler} />
      </div>
    );
}

export default SearchInput;