import weatherCard2 from "../Components/weatherCard2"
// import RadarCharts from "../Components/RadarCharts"
// const data1 = [
//       {
//         id: 'Temperature',
//         percentage: 120,
//       },
//       {
//         id: 'Humidity',
//         percentage: 85,
//       },
//       {
//         id: 'Pressure',
//         percentage: 65,
//       },
//       {
//         id: 'Rain',
//         percentage: 65,
//       },
//       {
//         id: 'Wind',
//         percentage: 65,
//       },
//     ];
function Details() {
  
  return (
    <div >
       {/* <div className='w-96 h-60'>
              <RadarCharts data={data1}/>
            </div> */}
      <weatherCard2/>
    </div>
  )
}

export default Details
