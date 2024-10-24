import { IconButton, Tooltip } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function weatherCard1() {
  return (
    <div className="h-80 w-[700px] border-opacity-50 rounded-lg border-2 p-3  ">
      <p className="text-sm font-semibold text-gray-500">Current Weather</p>
      <p className="text-xs">4:30 PM</p>
        <div className="flex justify-between items-center -mt-10">
          <p className="text-9xl font-thin">28°c</p>
          <div className="flex items-center">
            <div>
            <p className="text-2xl font-semibold">Cloudy</p>
            <p className="text-sm font-semibold">Feels like 35°</p>
            </div>
            <img  className="w-fit"src="https://openweathermap.org/img/wn/10d@4x.png" alt="cloudy" />
          </div>
        </div>
        <p className="mb-5">Scattered light rain showers are expected. The high will be 30° on this very humid day.</p>
        <div className="flex justify-around">
            <div className="flex flex-col items-center mr-10 relative">
            <Tooltip sx={{position:"absolute",top:"-10px",left:"30px"}} title="Active Users">
                <IconButton>
                    <InfoOutlinedIcon />
                </IconButton>
            </Tooltip>
              <p className="text-sm font-semibold">Wind</p>
              <p className="text-sm font-semibold">7km/h</p>
            </div>
            <div className="flex flex-col items-center mr-10 relative">
               <Tooltip sx={{position:"absolute",top:"-10px",left:"50px"}} title="Active Users">
                <IconButton>
                    <InfoOutlinedIcon />
                </IconButton>
            </Tooltip>
              <p className="text-sm font-semibold">Humidity</p>
              <p className="text-sm font-semibold">70%</p>
            </div>
            <div className="flex flex-col items-center mr-10 relative">
               <Tooltip sx={{position:"absolute",top:"-10px",left:"45px"}} title="Active Users">
                <IconButton>
                    <InfoOutlinedIcon />
                </IconButton>
            </Tooltip>
              <p className="text-sm font-semibold">Visibility</p>
              <p className="text-sm font-semibold">10km</p>
            </div>
            <div className="flex flex-col items-center mr-10 relative">
               <Tooltip sx={{position:"absolute",top:"-10px",left:"45px"}} title="Active Users">
                <IconButton>
                    <InfoOutlinedIcon />
                </IconButton>
            </Tooltip>
              <p className="text-sm font-semibold">Pressure</p>
              <p className="text-sm font-semibold">1000mb</p>
            </div>
          </div>
        
    </div>
  )
}

export default weatherCard1
