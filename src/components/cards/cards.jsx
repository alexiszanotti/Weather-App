import { useContext } from "react";
import { CityContext } from "../../context/CityContext";
import { Card } from "../card/card";
import "./cards.css";

export const Cards = () => {
  const { cities, onClose } = useContext(CityContext);

  return (
    <div className='cards'>
      {cities &&
        cities?.map(
          ({ id, name, country, temp, img, pressure, wind, description, humidity, nextDays }) => (
            <Card
              key={id}
              name={name}
              country={country}
              temp={temp}
              img={img}
              pressure={pressure}
              wind={wind}
              description={description}
              id={id}
              humidity={humidity}
              nextDays={nextDays}
              onClose={() => onClose(id)}
            />
          )
        )}
    </div>
  );
};
