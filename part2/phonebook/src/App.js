import React, { useEffect, useState } from "react";
import PersonForms from "./components/PersonForm";
import SearchInput from "./components/SearchInput";
import RenderPersons from "./components/RenderPersons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();

    if (persons.filter((person) => person.name === newName).length === 0) {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    } else {
      if (window.confirm(newName + " is already added to phonebook, replace the old number with a new one?")) {
        const person = persons.find((p) => p.name === newName);
        const changedPerson = { ...person, number: newNumber };

        personService
          .update(person.id, changedPerson)
          .then((returnedPerson) => {
            console.log(returnedPerson);
            setPersons(
              persons.map((person) =>
                person.name !== newName ? person : returnedPerson
              )
            );
          });
      }
    }
  };

  const handleDelete = (id, name) => {
    if (window.confirm("Delete " + name + "?")) {
      personService.remove(id).then(() => {
        const newPersons = persons.filter((item) => item.id !== id);
        setPersons(newPersons);
      });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchInput newSearch={newSearch} searchHandler={handleSearchChange} />
      <h2>Add a new</h2>
      <PersonForms
        submitHandler={addName}
        newName={newName}
        nameHandler={handleNameChange}
        newNumber={newNumber}
        numberHandler={handleNumberChange}
      />
      <h2>Numbers</h2>
      <>
        <RenderPersons
          persons={persons}
          newSearch={newSearch}
          handleDelete={handleDelete}
        />
      </>
    </div>
  );
};

export default App;
