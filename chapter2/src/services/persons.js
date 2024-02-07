import axios from 'axios';
const baseURL = 'http://localhost:3001/persons'

const fetchData = () => {
    const request = axios.get(baseURL);
    return request.then(response => response.data);
}

const addPerson = (newObject) => {
    const request = axios.post(baseURL, newObject);
    return request.then(response => response.data);
}

export default {fetchData, addPerson}