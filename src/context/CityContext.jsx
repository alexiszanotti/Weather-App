import { useState, createContext } from "react";

export const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (
    <CityContext.Provider value={{ cities, setCities, onClose }}>{children}</CityContext.Provider>
  );
};
