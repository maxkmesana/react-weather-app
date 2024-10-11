import { useEffect, useState } from 'react';
import './App.css';
import { getCurrentWeatherByCity } from './api';

function WeatherComponent(props){
    return(
        <></>
    );
}

function MainWeatherDashboard({weatherObject}){
    return(
        <div className='main-dashboard-container'>
            <h3>{weatherObject.condition.text}</h3>
            <img src={weatherObject.condition.icon} alt={weatherObject.condition.text} />
            <div class="weather-data-container"></div>

        </div>
    );
}

function App() {
    const [weatherObject, setWeatherObject] = useState(0);

    useEffect(() => {
        getCurrentWeatherByCity("Mar del Plata")
        .then((data) => {setWeatherObject(data)})
        .catch((error) => {console.log(error)});
    }, []);
    return (
    < MainWeatherDashboard  />
    );
  }
  
  export default App;