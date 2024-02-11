import { useState, useEffect } from 'react';
import axios from 'axios'
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import Debug from './components/Debug';
import personsService from './services/persons'
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [newNotification, setNewNotification] = useState(' ');

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
        setNewNotification(`Added '${newPerson.name}'`)
        setTimeout(() => {
          setNewNotification(null);
        }, 5000);
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

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id));
        })
        .catch(error => {
          setNewNotification(` Your contact '${person.name}' was deleted from server`);
          setTimeout(() => {
            setNewNotification(null)
          }, 5000)
          setPersons(persons.filter(p => p.id !== id));
        });
    }
  }
  

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
      <Notification message={newNotification}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} onDelete={handleDelete} />
    </div>
  );
};

export default App;
