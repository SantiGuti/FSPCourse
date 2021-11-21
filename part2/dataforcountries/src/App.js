import React, { Suspense, useEffect, useState } from "react";
import RenderCountries from "./components/RenderCountries";
import axios from "axios";


const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = (country) => {
    setSearch(country);
  };

  return (
    <div>
      <div>
        Find countries: <input value={search} onChange={handleSearchChange} />
      </div>
      <div>
        <RenderCountries
          countries={countries}
          newSearch={search}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default App;
