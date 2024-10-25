import  { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
export default class BarCharts extends PureComponent {

  render() {
    const{data}=this.props
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={50} height={40} data={data}>
          <Bar dataKey="hum" fill="#8BBCCC"/>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
BarCharts.propTypes = {
  data: PropTypes.array.isRequired,
};