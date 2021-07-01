import React, { useState } from "react";
import PersonForms from "./components/PersonForm";
import SearchInput from "./components/SearchInput";
import RenderPersons from "./components/RenderPersons";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "040-123456" }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const addName = (event) => {
    event.preventDefault();

    if (persons.filter(person => (person.name === newName)).length === 0 ){
      const personObject = {
        name: newName,
        number: newNumber
      };
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }

    else{
      window.alert(`${newName} is already added to phonebook`);
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
        <SearchInput newSearch={newSearch} searchHandler={handleSearchChange}/>
      <h2>add a new</h2>
        <PersonForms submitHandler={addName} newName={newName} nameHandler={handleNameChange} newNumber={newNumber} numberHandler={handleNumberChange} />
      <h2>Numbers</h2>
      <>
        <RenderPersons persons={persons} newSearch={newSearch}/>
      </>
    </div>
  );
};

export default App;