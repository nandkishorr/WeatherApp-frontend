function weatherCard3({ day, temperature, iconUrl, weatherType }) {
  return (
    <div className="w-[120px] h-44 rounded-lg border-2 p-2">
      <p className="text-sm">{day}</p>
      <div className="h-20 mt-2">
        <img src={iconUrl} alt="forecast" />
      </div>
      <p className="text-sm mt-2">{temperature}°C</p>
      <p className="text-xs">{weatherType}</p>
    </div>
  );
}

export default weatherCard3;