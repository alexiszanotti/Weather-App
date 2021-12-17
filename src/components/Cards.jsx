import React from "react";
import "./Cards.css";
import Card from "./Card.jsx";

export default function Cards(props) {
  return (
    <div className='cards'>
      {props.cities?.map(c => (
        <Card
          key={c.id}
          name={c.name}
          country={c.country}
          temp={c.temp}
          img={c.img}
          pressure={c.pressure}
          wind={c.wind}
          description={c.description}
          id={c.id}
          humidity={c.humidity}
          nextDays={c.nextDays}
          onClose={() => props.onClose(c.id)}
        />
      ))}
    </div>
  );
}
