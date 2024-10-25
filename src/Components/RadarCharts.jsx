import { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
export default class RadarCharts extends PureComponent {
 
  render() {
    const { data }=this.props
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="id" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="percentage" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
RadarCharts.propTypes = {
  data: PropTypes.array.isRequired,
}