import { gsap } from "gsap";
import "./card.css";

export const Card = ({
  country,
  wind,
  temp,
  name,
  img,
  pressure,
  onClose,
  description,
  humidity,
  nextDays,
}) => {
  //get day of the week
  const day = new Date().getDay();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = days[day];
  const tomorrow = days[(day + 1) % 7];
  const tomorrow1 = days[(day + 2) % 7];
  const tomorrow2 = days[(day + 3) % 7];
  const tomorrow3 = days[(day + 4) % 7];

  const capitalize = word => {
    if (word && word.length) return word[0].toUpperCase() + word.slice(1);
  };

  const detail = () => {
    const p = document.querySelector(".card-right");
    const q = document.querySelector(".container").nextSibling;
    if (!q) {
      gsap.to(p, { duration: 0.5, opacity: 1, x: 300, zIndex: 1 });
      gsap.to(q, { duration: 0.5, x: 300 });
    } else {
      const j = q.lastChild;
      if (j && j.style.opacity === "1") {
        gsap.to(p, { duration: 0.5, opacity: 1, x: -300, zIndex: 1 });
      } else {
        gsap.to(j, { duration: 0.5, opacity: 1, x: 300, zIndex: 1 });
      }
    }
  };

  const closeDetail = () => {
    const p = document.querySelector(".card-right");
    const q = document.querySelector(".container").nextSibling;
    if (p && !q) {
      gsap.to(p, { duration: 0.5, opacity: 0, x: 0, zIndex: -1 });
      gsap.to(q, { duration: 0.5, x: 0 });
    } else {
      const j = q.lastChild;
      if (j && j.style.opacity === "1") {
        gsap.to(j, { duration: 0.5, opacity: 0, x: 0, zIndex: -1 });
      } else {
        gsap.to(p, { duration: 0.5, opacity: 0, x: 0, zIndex: -1 });
      }
    }
  };
  return (
    <div className='container'>
      <div className='card-left'>
        <button className='btn-close' onClick={onClose}>
          X
        </button>
        <div className='card-header'>
          <div className='location-card'>
            <span>
              <h3 onClick={detail} className='title-location'>
                {" "}
                <i className='fas fa-map-marker-alt'></i>
                {country ? " " + name + ", " + country : " " + name}
              </h3>
            </span>
          </div>
          <div className='title-card'>
            <h4>{today}</h4>
          </div>
        </div>
        <div className='card-temp'>
          <img
            className='iconoClima'
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            width='80'
            height='80'
            alt='Img not found'
          />
          <h1>{Math.round(temp)}°C</h1>
          <h4>{capitalize(description)}</h4>
        </div>
      </div>
      <div className='card-right'>
        <button id='btn-close1' onClick={closeDetail}>
          X
        </button>
        <div className='card-rigth-header'>
          <div className='card-humedad'>
            <h3>HUMIDITY: {humidity} %</h3>
            <h3>WIND: {wind} km/h</h3>
            <h3>PRESSURE: {pressure} hPa</h3>
          </div>
        </div>

        <div className='every-day'>
          {nextDays?.map(({ id, day1, temp1, day2, temp2, day3, temp3, day4, temp4 }) => (
            <div key={id} className='next-days'>
              <div className='card-day'>
                <img
                  alt='Img not found'
                  className='img-days'
                  src={`http://openweathermap.org/img/wn/${day1}@2x.png`}
                />
                <h3 className='nexts-days-title'>{tomorrow.slice(0, 3)}</h3>
                <h3>{Math.round(temp1)}°C</h3>
              </div>
              <div className='card-day'>
                <img
                  alt='Img not found'
                  className='img-days'
                  src={`http://openweathermap.org/img/wn/${day2}@2x.png`}
                />
                <h3 className='nexts-days-title'>{tomorrow1.slice(0, 3)}</h3>
                <h3>{Math.round(temp2)}°C</h3>
              </div>
              <div className='card-day'>
                <img
                  alt='Img not found'
                  className='img-days'
                  src={`http://openweathermap.org/img/wn/${day3}@2x.png`}
                />
                <h3 className='nexts-days-title'>{tomorrow2.slice(0, 3)}</h3>
                <h3>{Math.round(temp3)}°C</h3>
              </div>
              <div className='card-day'>
                <img
                  alt='Img not found'
                  className='img-days'
                  src={`http://openweathermap.org/img/wn/${day4}@2x.png`}
                />
                <h3 className='nexts-days-title'>{tomorrow3.slice(0, 3)}</h3>
                <h3>{Math.round(temp4)}°C</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
