
import { ResponsiveRadialBar } from '@nivo/radial-bar'
import PropTypes from 'prop-types'
  function RadialBar({data}) {
    const chartData=[
        {
            "id":"sea level",
            "data":[{
                "x":"sea level",
                "y": data?.sea_level
            }]
        },
        {
            "id":"ground level",
            "data":[{
                "x":"ground level",
                "y": data?.grnd_level
            }]
        }]
  return (
    
    <>
    <ResponsiveRadialBar
        data={chartData}
        valueFormat=">-.2f"
        padding={0.4}
        cornerRadius={2}
        margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 80,
                translateY: 0,
                itemsSpacing: 6,
                itemDirection: 'left-to-right',
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'square',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    </>
  )
}
RadialBar.propTypes = {
        data: PropTypes.shape({
          sea_level: PropTypes.number,
          grnd_level: PropTypes.number,
        }).isRequired,
      };


export default RadialBar
