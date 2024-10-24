import WeatherCard1 from '../Components/weatherCard1';
function Overview() {
  return (
    <div className="w-full ">
    <div className='flex p-3 w-full border-b border-zinc-900 border-opacity-10 font-semibold'>
    <img className='font-bold' src="./location.svg" alt="location" /> Kochi,India !
    </div>
    <div className='flex w-full p-5'>
    <WeatherCard1 />


    </div>







    </div>
  )
}

export default Overview
