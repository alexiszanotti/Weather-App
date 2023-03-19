import React from "react";
import { Cards, Navbar } from "./components";
import { CityProvider } from "./context/CityContext";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <CityProvider>
        <Navbar />
        <Cards />
      </CityProvider>
    </div>
  );
}

export default App;
