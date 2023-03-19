import { useContext, useState } from "react";
import { CityContext } from "../../context/CityContext";
import { onSearch } from "./../../api/fetchApi";
import "./navbar.css";

export const Navbar = () => {
  const [search, setSearch] = useState("");

  const { setCities } = useContext(CityContext);

  const onSubmit = async e => {
    e.preventDefault();
    const newCity = await onSearch(search);
    if (Object.keys(newCity).length) {
      setCities(oldCities => [...oldCities, newCity]);
    } else {
      alert("City not found");
    }
    setSearch("");
  };
  return (
    <div className='nav-container'>
      <nav className='navBar'>
        <div className='weather-container'>
          <i className='fas fa-cloud-sun'></i>
          <h3>Weather App</h3>
        </div>
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

        <form className='search-container' onSubmit={onSubmit}>
          <input
            className='search-bar'
            type='text'
            placeholder='City...'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <input className='search-btn' type='submit' value='Agregar' />
        </form>
      </nav>
    </div>
  );
};
