function weatherCard3() {
  return (
    <div className="w-[120px] h-44 rounded-lg border-2 p-2">
      <p className="text-sm">Today</p>
      <div className="h-20 mt-2"><img src="https://openweathermap.org/img/wn/10d@4x.png" alt="forecast" /></div>
      <p className="text-sm mt-2">28°c</p>
      <p className="text-xs">Cloudy</p>
    </div>
  )
}

export default weatherCard3
