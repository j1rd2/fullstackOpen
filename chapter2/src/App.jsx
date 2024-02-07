import { useState, useEffect } from 'react';
import axios from 'axios'
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import Debug from './components/Debug';
import personsService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  //Function to fetch the data from server
  useEffect(() => {
    personsService
      .fetchData()
      .then(initialPersons => {
        setPersons(initialPersons); // refresh persons state
      });
  }, []);
  
  const addPerson = (event) => {
    event.preventDefault();
  
    if(persons.some(person => person.name === newName)){
      alert(newName + ' is already used');
      return;
    }
  
    const newPerson = {
      id: new Date().getTime(), // id improved
      name: newName,
      number: newNumber
    };
  
    personsService
      .addPerson(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson)); // refresg the state
        setNewName('');
        setNewNumber('');
      });
  };  

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const personsToShow = search
  ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
  : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Filter</h3>
      <Filter value={search} onChange={handleSearchChange} />
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange}
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
      />
      <Debug newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />

    </div>
  );
};

export default App;
