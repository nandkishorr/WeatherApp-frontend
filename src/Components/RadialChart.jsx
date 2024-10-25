import  { PureComponent } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'

export default class RadialChart extends PureComponent {
  

  render() {
    const {data} = this.props
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="115%" barSize={10} data={data} fill='#15B392'>
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="vis"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}
RadialChart.propTypes = {
    data: PropTypes.array.isRequired,
  }