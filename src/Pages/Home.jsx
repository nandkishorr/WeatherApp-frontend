import LogoutIcon from '@mui/icons-material/Logout';
import {useState} from 'react';
import Overview from './Overview';
import Details from './Details';
function Home() {
    const [dash,setDash] = useState(<Overview/>)
  return (
    <div className='flex flex-row h-screen'>
  <div className="w-[15rem] pr-5 py-5 left-0 top-0 border-r border-zinc-900 border-opacity-10 flex-col items-center flex sticky">
    <div > <p className="text-3xl font-semibold text-gray-700" >WeatherApp</p>
    </div>
    <div className='mr-16 text-zinc-900 text-opacity-40 text-sm pt-10 p-2'>Dashboard</div>
    <button onClick={()=>setDash(<Overview/>)} className='mr-2 ml-6 mb-5 mt-5 hover-bg-zinc-900 hover-bg-opacity-5 w-40 px-6 py-0.5 rounded-lg text-sm'><div className='flex'><img src='./overview.svg' alt='overviewicon' className='mr-1'/>Overview</div></button>
    <button  onClick={()=>setDash(<Details/>)} className='mr-2 ml-6 hover-bg-zinc-900 hover-bg-opacity-5 w-40 px-6 py-0.5 rounded-lg text-sm'><div className='flex'><img src='./details.svg' alt='userprofile' className='mr-1'/>Details</div></button>
    <button   className='mr-2 ml-6 hover-bg-zinc-900 hover-bg-opacity-5 mt-[450px] w-40 px-7 py-0.5 rounded-lg text-sm text-red-700 border'><div className='flex font-semibold' ><LogoutIcon/>Logout</div></button>

  </div>
  <div className="w-full overflow-y-scroll">
    {dash}
  </div>
</div>
  )
}

export default Home
