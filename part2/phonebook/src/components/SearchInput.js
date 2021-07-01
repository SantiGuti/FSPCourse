import React from "react";

const SearchInput = ({newSearch, searchHandler}) => {
    return (
      <div>
        filter shown with
        <input value={newSearch} onChange={searchHandler} />
      </div>
    );
}

export default SearchInput;