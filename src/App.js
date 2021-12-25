import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './styles/App.css';
import Navbar from './components/Navbar';

const App = () => {

  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json')
      let data = await res.json();
      setPeople(data.results);
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json')
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchPeople();
    fetchPlanets();
  }, []);

  console.log("data", people)

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
