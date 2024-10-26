import RadarCharts from "../Components/RadarCharts"
import axios from 'axios';
 const data1 = [
      {
        id: 'Temperature',
        percentage: 120,
      },
      {
        id: 'Humidity',
        percentage: 85,
      },
      {
        id: 'Pressure',
        percentage: 65,
      },
      {
        id: 'Rain',
        percentage: 65,
      },
      {
        id: 'Wind',
        percentage: 65,
      },
    ];

import AreaCharts from "../Components/AreaCharts";
import BarCharts from "../Components/BarCharts";
import LineCharts from "../Components/LineCharts";
import RadialChart from "../Components/RadialChart";
import WeatherCard2 from "../Components/weatherCard2"
import WeatherCard3 from "../Components/weatherCard3"
import GaugeChart from "../Components/GaugeChart";
import { useEffect, useState } from "react";

function Details() {

 const [forecast, setForecast] = useState(null); 
const fetchForecast=async(city)=>{
  try {
    const url = import.meta.env.VITE_API_URL;
    console.log('Fetching weather data for:', city);
    const forecastResponse = await axios.post(`${url}/forecast`,{city:city});
    if (forecastResponse.status === 200) {
      const forecastData = forecastResponse.data;
      console.log('forecast Data:', forecastData);
      setForecast(forecastData);
    } else if (forecastResponse.status === 401) {
      console.error('Unauthorized access. Please check your API key.');
    } else {
      console.error(`Error fetching forecast data: HTTP error! Status: ${forecastResponse.status}`);
    }
  } catch (error) {
    console.error('Error fetching current forecast:', error);
  }
}  
useEffect(() => {
  fetchForecast('adoor')
}, [])

  const data = [
    {
      day: 'Day 1',
      hum: 65,      // humidity
      pres: 1012,   // pressure
      temp: 28,     // temperature
      wnd: 12,      // wind speed
      vis: 10,      // visibility
      prec: 0.2,    // precipitation
      fl: 10,       // feels like
      cld: 40  ,
           // cloud cover
    },
    {
      day: 'Day 2',
      hum: 70,
      pres: 1015,
      temp: 36,
      wnd: 10,
      vis: 9,
      prec: 0.0,
      fl: 27,
      cld: 35
    },
    {
      day: 'Day 3',
      hum: 60,
      pres: 1013,
      temp: 29,
      wnd: 14,
      vis: 10,
      prec: 1.5,
      fl: 31,
      cld: 45
    },
    {
      day: 'Day 4',
      hum: 68,
      pres: 1011,
      temp: 27,
      wnd: 11,
      vis: 8,
      prec: 0.8,
      fl: 39,
      cld: 50
    },
    {
      day: 'Day 5',
      hum: 72,
      pres: 1016,
      temp: 25,
      wnd: 9,
      vis: 7,
      prec: 0.3,
      fl: 26,
      cld: 55
    }
  ];
  return (
    <div className="h-fit p-5 ">
    <div className='flex p-3 w-full border-b border-zinc-900 border-opacity-10 font-semibold '>
    <img className='font-bold' src="./location.svg" alt="location" /> Kochi,India 
    </div>
       
    <div className="w-full h-full grid grid-cols-4 gap-y-5 mt-5 ">
      <WeatherCard2 object={<AreaCharts data={data}/>} title='Temperature' />
      <WeatherCard2 object={<LineCharts data={data} dataKey="fl"/>} title='Feels Like' />
      <WeatherCard2 object={<BarCharts data={data}/>} title='Humidity' />
      <WeatherCard2 object={<GaugeChart value='50' />} title='Precipitation' />
      <WeatherCard2 object={<GaugeChart value='90' />} title='Cloud Cover' />
      <WeatherCard2 object={<RadialChart data={data} />} title='Visibility' />
      <WeatherCard2 object={<LineCharts data={data} dataKey="pres"/>} title='Pressure' />
      
      
      <div className='w-80 h-60'>
              <RadarCharts data={data1}/>
      </div>
      </div>
      <div className="mt-3">
  <p>10-Day Forecast</p>
  <div className="flex w-fit gap-x-2 mt-3">
    {forecast && forecast.length > 0 ? (
      forecast.map((dayForecast, index) => (
        <WeatherCard3
          key={index}
          day={dayForecast.date}
          temperature={dayForecast.temp}
          iconUrl={dayForecast.climateIcon}
          weatherType={dayForecast.main}
        />
      ))
    ) : (
      <p>Loading forecast data...</p>
    )}
  </div>
</div>


      
    </div>
  )
}

export default Details
