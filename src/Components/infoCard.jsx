
const infoCard = () => {
      return (
        <div className=' w-[550px] h-64 border rounded-lg flex-col p-2'>
        <div className='sticky'><p className='text-lg font-semibold mb-2'> </p> Daily Overview</div>
        <div className='w-full overflow-y-auto  scrollbar h-56'>
        <div className='p-2 flex flex-row justify-between font-medium my-3 border-b-2 border-opacity-5 '><p>Temperature</p><p>27c</p></div>
        <div className='p-2 flex flex-row justify-between font-medium my-3 border-b-2 border-opacity-5'><p>Average High</p>35c</div>
        <div className='p-2 flex flex-row justify-between font-medium my-3 border-b-2 border-opacity-5 '><p>Average Low</p><p>24c</p></div>
        <div className='p-2 flex flex-row justify-between font-medium my-3 border-b-2 border-opacity-5'><p>Average Humidity</p><p>86%</p></div>
        <div className='p-2 flex flex-row justify-between font-medium my-3 border-b-2 border-opacity-5'><p>Average Pressure</p><p>1000mb/hr</p></div>
        <div className='p-2 flex flex-row justify-between font-medium my-3 '><p>Average Wind</p><p>5m/s</p></div>
        </div>
      </div>
      )
    }

    export default infoCard
    