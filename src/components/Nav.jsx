import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <div className='nav-container'>
      <nav className='navBar'>
        <Link to='/'>
          <div className='weather-container'>
            <i className='fas fa-cloud-sun'></i>
            <h3>Weather App</h3>
          </div>
        </Link>
        <div className='icons-container'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/alexis-zanotti/'
          >
            <i className='fab fa-linkedin'></i>
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/alexiszanotti'>
            <i className='fab fa-github'></i>
          </a>
        </div>

        <form
          className='search-container'
          onSubmit={e => {
            e.preventDefault();
            onSearch(city);
            setCity("");
          }}
        >
          <input
            className='search-bar'
            type='text'
            placeholder='Ciudad...'
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <input className='search-btn' type='submit' value='Agregar' />
        </form>
      </nav>
    </div>
  );
}
