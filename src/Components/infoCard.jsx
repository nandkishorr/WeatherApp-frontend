
const infoCard = ({data}) => {
      return (
        <div className=' w-[550px] h-64 border rounded-lg flex-col p-2'>
        <div className='sticky flex justify-between px-2'><p className='text-lg font-semibold mb-2'>Daily Overview</p><p className="text-lg font-medium text-gray-600">{data?.dominant_condition}</p> </div>
        <div className='w-full overflow-y-auto  scrollbar h-56'>
        <div className='p-2 flex flex-row justify-between font-medium my-3 border-b-2 border-opacity-5 '><p>Temperature</p><p>{data.avg_temp}c</p></div>
        <div className='p-2 flex flex-row justify-between font-medium my-3 border-b-2 border-opacity-5'><p>Average High</p>{data.max_temp}c</div>
        <div className='p-2 flex flex-row justify-between font-medium my-3 border-b-2 border-opacity-5 '><p>Average Low</p><p>{data.min_temp}c</p></div>
        <div className='p-2 flex flex-row justify-between font-medium my-3 border-b-2 border-opacity-5'><p>Average Humidity</p><p>{data.avg_humidity}%</p></div>
        <div className='p-2 flex flex-row justify-between font-medium my-3 border-b-2 border-opacity-5'><p>Average Pressure</p><p>{data.avg_pressure}hPa</p></div>
        <div className='p-2 flex flex-row justify-between font-medium my-3 '><p>Average Wind</p><p>{data.avg_wind_speed}m/s</p></div>
        </div>
      </div>
      )
    }

    export default infoCard
    