import WeatherCard1 from '../Components/weatherCard1';
import RadialBar from '../Components/RadialBar';
import InfoCard from '../Components/infoCard';
import PieCharts from '../Components/PieCharts';

function Overview() {
  const data=[
    {
        "id":"sea level",
        "data":[{
            "x":"sea level",
            "y":1009
        }]
    },
    {
        "id":"ground level",
        "data":[{
            "x":"ground level",
            "y":1004
        }]
    }]
    
  
// console.log(data)
  return (
    <div>
    <div className='flex p-3 w-full border-b border-zinc-900 border-opacity-10 font-semibold sticky top-0'>
    <img className='font-bold' src="./location.svg" alt="location" /> Kochi,India !
    </div>
    <div className='p-5'>
      <div className='flex w-full'>
        <WeatherCard1 />
        <div className="flex-1 ml-5">
              <RadialBar data={data} />
            </div>
      </div> 
      <div className=' mt-3 flex justify-between items-center'>
            <div className='w-[600px] h-72 '>
              <p className='text-gray-700 font-medium ml-5 '>Monthly Overview</p>
              <PieCharts />
            </div>
            <InfoCard />
      </div>
     
    </div>
   
    </div>
  )
}

export default Overview
