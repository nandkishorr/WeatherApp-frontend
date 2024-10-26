import RadarCharts from "../Components/RadarCharts"
import axios from 'axios';
import AreaCharts from "../Components/AreaCharts";
import BarCharts from "../Components/BarCharts";
import LineCharts from "../Components/LineCharts";
import RadialChart from "../Components/RadialChart";
import WeatherCard2 from "../Components/weatherCard2"
import WeatherCard3 from "../Components/weatherCard3"
import GaugeChart from "../Components/GaugeChart";
import { useEffect, useState } from "react";


function Details() {
  function percent_calculate(data) {
    if (!data || !Array.isArray(data)) {
      console.error('Invalid data passed to percent_calculate:', data);
      return []; // Return an empty array or a default value if data is invalid
    }
    const maxValues = {
        hum: 0,pres: 0,temp: 0,wnd: 0,vis: 0,
    };
    data.forEach(entry => {
      maxValues.hum = Math.max(maxValues.hum, entry.hum);
      maxValues.pres = Math.max(maxValues.pres, entry.pres);
      maxValues.temp = Math.max(maxValues.temp, parseFloat(entry.temp));
      maxValues.wnd = Math.max(maxValues.wnd, entry.wnd);
      maxValues.vis = Math.max(maxValues.vis, parseFloat(entry.vis));
  });
  // Define maximum possible values for each parameter
  const maxPossibleValues = {hum: 100, pres: 1020, temp: 50, wnd: 10, vis: 20, };
  const percentages = [
      { id: 'Temperature', percentage: (maxValues.temp / maxPossibleValues.temp) * 100 },
      { id: 'Humidity', percentage: (maxValues.hum / maxPossibleValues.hum) * 100 },
      { id: 'Pressure', percentage: (maxValues.pres / maxPossibleValues.pres) * 100 },
      { id: 'Wind', percentage: (maxValues.wnd / maxPossibleValues.wnd) * 100 },
      { id: 'Visibility', percentage: (maxValues.vis / maxPossibleValues.vis) * 100 },];
    return percentages;
  }
  
 const [forecast, setForecast] = useState(null);
 const [hourly, setHourly] = useState(null); 
 
const fetchForecast=async(city)=>{
  const url = import.meta.env.VITE_API_URL;
  try {
   
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

  try {
    console.log('Fetching hourly forecast data for:', city);
    const HourlyResponse = await axios.post(`${url}/hourly`,{city:city});
    if (HourlyResponse.status === 200) {
      const HourlyData = HourlyResponse.data;
      console.log('Hourly Data:', HourlyData);
      setHourly(HourlyData);
    } else if (HourlyResponse.status === 401) {
      console.error('Unauthorized access. Please check your API key.');
    } else {
      console.error(`Error fetching Hourly data: HTTP error! Status: ${HourlyResponse.status}`);
    }
  } catch (error) {
    console.error('Error fetching current Hourly:', error);
  }
}  
useEffect(() => {
  localStorage.getItem('selectedCity') ? fetchForecast(localStorage.getItem('selectedCity')) : fetchForecast('Kochi');
}, [])
    const prec = hourly ? hourly[0].prec : null;
    const cl= hourly ? hourly[0].cld : null;
    const temp = hourly ? hourly[0].temp : null;
    const f1 = hourly ? hourly[0].fl : null;
    const hum = hourly ? hourly[0].hum : null;
    const vis = hourly ? hourly[0].vis : null;
    const pres = hourly ? hourly[0].pres : null;
    const data =  percent_calculate(hourly);

  return (
    <div className="h-fit p-5 ">
    <div className='flex p-3 w-full border-b border-zinc-900 border-opacity-10 font-semibold '>
    <img className='font-bold' src="./location.svg" alt="location" /> {localStorage.getItem('selectedCity')} 
    </div>
       
    <div className="w-full h-full grid grid-cols-4 gap-y-5 mt-5 ">
      <WeatherCard2 object={<AreaCharts data={hourly}/>} title='Temperature' value={temp} unit="°C" />
      <WeatherCard2 object={<LineCharts data={hourly} dataKey="fl"/>} value={f1} unit="°C"title='Feels Like' />
      <WeatherCard2 object={<BarCharts data={hourly}/>} title='Humidity'value={hum} unit="%" />
      <WeatherCard2 object={<GaugeChart value={prec} />} title='Precipitation' value={prec} unit="mm" />
      <WeatherCard2 object={<GaugeChart value={cl} />} title='Cloud Cover'  value={cl} unit="%" />
      <WeatherCard2 object={<RadialChart data={hourly} />} title='Visibility'  value={vis} unit="km" />
      <WeatherCard2 object={<LineCharts data={hourly} dataKey="pres"/>} title='Pressure' value={pres} unit="hPa"/>
      
      
      <div className='w-80 h-60'>
              <RadarCharts data={data}/>
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
