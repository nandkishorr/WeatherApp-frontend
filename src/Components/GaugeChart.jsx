import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

import PropTypes from 'prop-types';
export default function GaugeChart({ value }) {
  return (
    <Gauge
      height={150}
      width={150}
      value={value}
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: '#7C93C3',
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
      })}
    />
  );
}

GaugeChart.propTypes = {
    value: PropTypes.string.isRequired,
  };