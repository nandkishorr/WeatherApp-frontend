
import PropTypes from 'prop-types';

function WeatherCard2({object, title,value,unit}) {
      
  return (
    <div className="w-72 h-64 rounded-lg border-2 p-3">
        <p className="text-xs -mt-2 mb-3">{title}</p>
        <div className=" flex justify-center w-64 h-32">
           
            {object}
        </div>
        <p className='text-3xl font-medium text-gray-600 mt-5 gap-'>{value}{unit}</p>
        
     
    </div>
  )
}

WeatherCard2.propTypes = {
  object: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
 value: PropTypes.number.isRequired,
unit: PropTypes.string.isRequired,

};

export default WeatherCard2
