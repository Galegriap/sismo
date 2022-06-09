import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const url = 'https://api.gael.cloud/general/public/sismos';
  const [todos, setTodos] = React.useState([]);
  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.status);
    const responseJson = await response.json();
    setTodos(responseJson);
    console.log(responseJson);
};
useEffect(() => {
  fetchApi();
}, []);
  return (
    <div className="App">
       Prueba Tecnica de React



    </div>
  );
}

export default App;
