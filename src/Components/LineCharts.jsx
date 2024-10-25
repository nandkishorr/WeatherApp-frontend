import { LineChart, Line, ResponsiveContainer} from 'recharts';
import PropTypes from 'prop-types';

const LineCharts = ({data ,dataKey}) => {
 
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={100} data={data}>
        <Line type="monotone" dataKey={dataKey} stroke="#F87A53" strokeWidth={3} dot={false}  />
      </LineChart>
    </ResponsiveContainer>
  );
};



LineCharts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataKey: PropTypes.string.isRequired,
};

export default LineCharts;
