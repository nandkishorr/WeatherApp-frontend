import  { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

export default class AreaCharts extends PureComponent {
 

  render() {
    const {data} = this.props
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#F87A53" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
  
}
AreaCharts.propTypes = {
  data: PropTypes.array.isRequired,
};
