import { useState, useEffect } from 'react';
import axios from 'axios'
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import Debug from './components/Debug';


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  //Function to fetch the data from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/persons'); 
        setPersons(response.data);
      } catch (error) {
        console.error('Error al cargar los datos del servidor:', error);
      }
    };

    fetchData();
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    if(persons.some(person => person.name === newName)){
      alert(newName + ' is already used');
      return;
    }

    const newPerson = {
      id: new Date().getTime(),
      name: newName,
      number: newNumber
    };
    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
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
