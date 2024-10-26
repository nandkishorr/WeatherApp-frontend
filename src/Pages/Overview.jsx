import WeatherCard1 from '../Components/weatherCard1';
import RadialBar from '../Components/RadialBar';
import InfoCard from '../Components/infoCard';
import PieCharts from '../Components/PieCharts';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Overview() {
  const [weather, setWeather] = useState('');
  const [selectedCity, setSelectedCity] = useState('Kochi'); 
  const [climate, setClimate] = useState('');
  const [summary, setSummary] = useState('');
  localStorage.setItem('selectedCity', selectedCity);
  const fetchWeatherData = async (city) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    try {
      console.log('Fetching weather data for:', city);
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      if (weatherResponse.status === 200) {
        const weatherData = weatherResponse.data;
        console.log('Weather Data:', weatherData);
        setWeather(weatherData);
        // localStorage.setItem('weatherData', JSON.stringify(weatherData));
      } else if (weatherResponse.status === 401) {
        console.error('Unauthorized access. Please check your API key.');
      } else {
        console.error(`Error fetching weather data: HTTP error! Status: ${weatherResponse.status}`);
      }
    } catch (error) {
      console.error('Error fetching current weather:', error);
    }
  };
    const OverviewData = async(city) => {
      const url = import.meta.env.VITE_API_URL;
    try {
      
      console.log('Fetching climate data for:', city);
      const ClimateResponse = await axios.post(`${url}/summary/climate`,{city:city});
      if (ClimateResponse.status === 200) {
        const ClimateData = ClimateResponse.data;
        console.log('Climate Data:', ClimateData);
        setClimate(ClimateData);
      } else if (ClimateResponse.status === 401) {
        console.error('Unauthorized access. Please check your API key.');
      } else {
        console.error(`Error fetching Climate data: HTTP error! Status: ${ClimateResponse.status}`);
      }
    } catch (error) {
      console.error('Error fetching current Climate:', error);
    }

    try {
      console.log('Fetching daily summary data for:', city);
      const DailySummaryResponse = await axios.post(`${url}/summary`,{city:city});
      if (DailySummaryResponse.status === 200) {
        const DailySummaryData = DailySummaryResponse.data;
        console.log('Daily Summary:', DailySummaryData);
        setSummary(DailySummaryData);
      } else if (DailySummaryResponse.status === 401) {
        console.error('Unauthorized access. Please check your API key.');
      } else {
        console.error(`Error fetching DailySummary data: HTTP error! Status: ${DailySummaryResponse.status}`);
      }
    } catch (error) {
      console.error('Error fetching current DailySummary:', error);
    }

  };

 

  useEffect(() => {
    fetchWeatherData(selectedCity); 
    OverviewData(selectedCity);

    // const intervalId = setInterval(() => {
    //   fetchWeatherData(selectedCity);
    // }, 5 * 60 * 1000); 
    // return () => clearInterval(intervalId);
  }, [selectedCity]);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value); 
  };

  return (
    <div>
      <div className='flex p-3 w-full  border-zinc-900 border-opacity-10 font-semibold sticky top-0'>
        <img className='font-bold' src="./location.svg" alt="location" />
        <select className="font-bold bg-white border-none outline-none" value={selectedCity} onChange={handleCityChange}>
          <option value="Kochi">Kochi, India</option>
          <option value="Mumbai">Mumbai, India</option>
          <option value="Delhi">Delhi, India</option>
          <option value="Chennai">Chennai, India</option>
          <option value="Bangalore">Bangalore, India</option>
          <option value="Hyderabad">Hyderabad, India</option>
          <option value="Kolkata">Kolkata, India</option>
        </select>
      </div>
      <div className='p-5'>
        <div className='flex w-full'>
          <WeatherCard1 data={weather} />
          <div className="w-[550px] ml-5">
          <RadialBar data={weather?.main} />
          </div>
        </div>
        <div className='mt-3 flex justify-between items-center'>
          <div className='w-[600px] h-72'>
            <p className='text-gray-700 font-medium ml-5'>Monthly Overview</p>
            <PieCharts data={climate} />
          </div>
          <InfoCard data={summary} />
        </div>
      </div>
    </div>
  );
}

export default Overview;
