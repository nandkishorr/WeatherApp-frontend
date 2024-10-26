import { IconButton, Tooltip } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PropTypes from 'prop-types';

function WeatherCard1({ data }) {
  if (!data) return <div>Loading...</div>; // Handle case when data is not available

  const temp = (data.main?.temp - 273.15).toFixed(0);
  const feels_like = (data.main?.feels_like - 273.15).toFixed(0);
  const visibility = data.visibility / 1000;
  const maxTemp = (data.main?.temp_max - 273.15).toFixed(0);
  const date = new Date(data.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="h-80 w-[700px] border-opacity-50 rounded-lg border-2 p-3">
      <p className="text-sm font-semibold text-gray-500">Current Weather</p>
      <p className="text-xs">{date}</p>
      <div className="flex justify-between items-center -mt-10">
        <p className="text-9xl font-thin">{temp}°C</p>
        <div className="flex items-center">
          <div>
            <p className="text-2xl font-semibold">{data.weather[0]?.main}</p>
            <p className="text-sm font-semibold">Feels like {feels_like}°</p>
          </div>
          <img
            className="w-fit"
            src={`https://openweathermap.org/img/wn/${data.weather[0]?.icon}@4x.png`}
            alt={data.weather[0]?.main}
          />
        </div>
      </div>
      <p className="mb-5">
        {data.weather[0]?.description.charAt(0).toUpperCase() + data.weather[0]?.description.slice(1)} expected. 
        The high will be {maxTemp}°c on this very humid day.
      </p>
      <div className="flex justify-around">
        {[
          { label: 'Wind', value: `${data.wind?.speed} m/sec`, tooltip: 'Wind Speed' },
          { label: 'Humidity', value: `${data.main?.humidity}%`, tooltip: 'Humidity' },
          { label: 'Visibility', value: `${visibility} km`, tooltip: 'Visibility Distance' },
          { label: 'Pressure', value: `${data.main?.pressure} mb`, tooltip: 'Atmospheric Pressure' },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center mr-10 relative">
            <Tooltip sx={{ position: 'absolute', top: '-10px', left: '45px' }} title={item.tooltip}>
              <IconButton>
                <InfoOutlinedIcon />
              </IconButton>
            </Tooltip>
            <p className="text-sm font-semibold">{item.label}</p>
            <p className="text-sm font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

WeatherCard1.propTypes = {
  data: PropTypes.shape({
    main: PropTypes.shape({
      temp: PropTypes.number,
      feels_like: PropTypes.number,
      temp_max: PropTypes.number,
      humidity: PropTypes.number,
      pressure: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }),
    visibility: PropTypes.number,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        main: PropTypes.string,
        description: PropTypes.string,
        icon: PropTypes.string,
      })
    ),
    dt: PropTypes.number,
  }),
};

export default WeatherCard1;
