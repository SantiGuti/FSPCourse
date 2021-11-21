import React from "react";
import Button from "./Button.js";
import Weather from "./Weather.js";

const Country = ({ country, handleClick }) => {
  return (
    <div>
      {country.name.common}
      <Button
        handleClick={() => handleClick(country.name.common)}
        text="show"
      />
    </div>
  );
};

const FullCountry = ({ country }) => {
  const languages = [];
  Object.entries(country.languages).forEach((entry) => {
    languages.push(entry[1]);
  });

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>Spoken languages</h3>
      <ul>
        {languages.map((lang) => (
          <li>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} width="200" alt={country.name} />
      <Weather city={country.capital} />
    </div>
  );
};

const RenderCountries = ({ countries, newSearch, handleClick }) => {
  const countryFilter = countries.filter((country) =>
    country.name.common.toLowerCase().includes(newSearch.toLowerCase())
  );

  if (countryFilter.length === 1) {
    return countryFilter.map((country) => (
      <FullCountry key={country.name} country={country} />
    ));
  }

  if (countryFilter.length <= 10) {
    return countryFilter.map((country) => (
      <Country key={country.name} country={country} handleClick={handleClick} />
    ));
  }

  return <p>Too many matches... </p>;
};

export default RenderCountries;
