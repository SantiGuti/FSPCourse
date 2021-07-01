import React from "react";

const Person = ({ person }) => {
  return (
    <li>
      {person.name} {person.number}
    </li>
  );
};

const RenderPersons = ({ persons, newSearch }) => {
  return (
    persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase())).map((person) => (
        <Person key={person.name} person={person} />
    ))
  );
};

export default RenderPersons;
