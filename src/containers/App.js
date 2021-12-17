import React, { useState } from "react";
import "./App.css";
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards";
import { Route, Routes } from "react-router-dom";

const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then(r => r.json())
      .then(r => {
        if (r.cod !== "404") {
          const ciudad = {
            name: r.city.name,
            country: r.city.country,
            temp: r.list[0].main.temp,
            img: r.list[0].weather[0].icon,
            id: r.city.id,
            pressure: r.list[0].main.pressure,
            wind: r.list[0].wind.speed,
            description: r.list[0].weather[0].description,
            humidity: r.list[0].main.humidity,
            nextDays: [
              {
                id: r.city.id,
                day1: r.list[1].weather[0].icon,
                day2: r.list[2].weather[0].icon,
                day3: r.list[3].weather[0].icon,
                day4: r.list[4].weather[0].icon,
                temp1: r.list[1].main.temp,
                temp2: r.list[2].main.temp,
                temp3: r.list[3].main.temp,
                temp4: r.list[4].main.temp,
              },
            ],
          };

          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path='/' element={<Cards cities={cities} onClose={onClose} />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
