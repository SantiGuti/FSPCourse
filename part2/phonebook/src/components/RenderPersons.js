import React from "react";

const Person = ({ person, handleDelete }) => {
  return (
    <li>
      {person.name} {person.number}
      <button onClick={handleDelete}>delete</button>
    </li>
  );
};

const RenderPersons = ({ persons, newSearch, handleDelete }) => {
  return persons
    .filter((person) =>
      person.name.toLowerCase().includes(newSearch.toLowerCase())
    )
    .map((person) => (
      <Person
        key={person.name}
        person={person}
        handleDelete={() => handleDelete(person.id, person.name)}
      />
    ));
};

export default RenderPersons;
