const apiKey = process.env.REACT_APP_API_KEY;

export const onSearch = async city => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
  );
  const newCity = await res.json();
  if (newCity.cod === "200") {
    const searchCity = {
      name: newCity.city.name,
      country: newCity.city.country,
      temp: newCity.list[0].main.temp,
      img: newCity.list[0].weather[0].icon,
      id: newCity.city.id,
      pressure: newCity.list[0].main.pressure,
      wind: newCity.list[0].wind.speed,
      description: newCity.list[0].weather[0].description,
      humidity: newCity.list[0].main.humidity,
      nextDays: [
        {
          id: newCity.city.id,
          day1: newCity.list[1].weather[0].icon,
          day2: newCity.list[2].weather[0].icon,
          day3: newCity.list[3].weather[0].icon,
          day4: newCity.list[4].weather[0].icon,
          temp1: newCity.list[1].main.temp,
          temp2: newCity.list[2].main.temp,
          temp3: newCity.list[3].main.temp,
          temp4: newCity.list[4].main.temp,
        },
      ],
    };
    return searchCity;
  }
  return {};
};
