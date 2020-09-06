import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie'
import { classNames } from '../utils';

export default () => {
  const chartData = [
    {
      "id": "Technological breakthrough",
      "color": "hsl(85, 81%, 50%)",
      "data": [
        {
          "x": "2008",
          "y": 100
        },
        {
          "x": "2009",
          "y": 105
        },
        {
          "x": "2010",
          "y": 115
        },
        {
          "x": "2011",
          "y": 178
        },
        {
          "x": "2012",
          "y": 189
        },
        {
          "x": "2013",
          "y": 205
        },
        {
          "x": "2014",
          "y": 271
        },
        {
          "x": "2015",
          "y": 273
        },
        {
          "x": "2016",
          "y": 255
        },
        {
          "x": "2017",
          "y": 337
        },
        {
          "x": "2018",
          "y": 488
        },
        {
          "x": "2019",
          "y": 549
        }
      ]
    },
    {
      "id": "Demographics and social change",
      "color": "hsl(334, 70%, 50%)",
      "data": [
        {
          "x": "2008",
          "y": 38
        },
        {
          "x": "2009",
          "y": 36
        },
        {
          "x": "2010",
          "y": 57
        },
        {
          "x": "2011",
          "y": 75
        },
        {
          "x": "2012",
          "y": 94
        },
        {
          "x": "2013",
          "y": 82
        },
        {
          "x": "2014",
          "y": 137
        },
        {
          "x": "2015",
          "y": 166
        },
        {
          "x": "2016",
          "y": 264
        },
        {
          "x": "2017",
          "y": 176
        },
        {
          "x": "2018",
          "y": 265
        },
        {
          "x": "2019",
          "y": 360
        }
      ]
    },
    {
      "id": "Rapid urbanization",
      "color": "hsl(314, 70%, 50%)",
      "data": [
        {
          "x": "2008",
          "y": 8
        },
        {
          "x": "2009",
          "y": 19
        },
        {
          "x": "2010",
          "y": 20
        },
        {
          "x": "2011",
          "y": 15
        },
        {
          "x": "2012",
          "y": 59
        },
        {
          "x": "2013",
          "y": 264
        },
        {
          "x": "2014",
          "y": 287
        },
        {
          "x": "2015",
          "y": 290
        },
        {
          "x": "2016",
          "y": 225
        },
        {
          "x": "2017",
          "y": 136
        },
        {
          "x": "2018",
          "y": 16
        },
        {
          "x": "2019",
          "y": 1
        }
      ]
    },
    {
      "id": "Climate change",
      "color": "hsl(4, 70%, 50%)",
      "data": [
        {
          "x": "2008",
          "y": 1
        },
        {
          "x": "2009",
          "y": 2
        },
        {
          "x": "2010",
          "y": 17
        },
        {
          "x": "2011",
          "y": 92
        },
        {
          "x": "2012",
          "y": 269
        },
        {
          "x": "2013",
          "y": 236
        },
        {
          "x": "2014",
          "y": 259
        },
        {
          "x": "2015",
          "y": 117
        },
        {
          "x": "2016",
          "y": 259
        },
        {
          "x": "2017",
          "y": 258
        },
        {
          "x": "2018",
          "y": 86
        },
        {
          "x": "2019",
          "y": 5
        }
      ]
    },
    {
      "id": "Emerging markets",
      "color": "hsl(46, 70%, 50%)",
      "data": [
        {
          "x": "2008",
          "y": 0
        },
        {
          "x": "2009",
          "y": 1
        },
        {
          "x": "2010",
          "y": 159
        },
        {
          "x": "2011",
          "y": 146
        },
        {
          "x": "2012",
          "y": 213
        },
        {
          "x": "2013",
          "y": 211
        },
        {
          "x": "2014",
          "y": 111
        },
        {
          "x": "2015",
          "y": 187
        },
        {
          "x": "2016",
          "y": 224
        },
        {
          "x": "2017",
          "y": 293
        },
        {
          "x": "2018",
          "y": 284
        },
        {
          "x": "2019",
          "y": 93
        }
      ]
    }
  ];

  const responsivePieData = [
    {
      "id": "Renewables",
      "label": "Renewables",
      "value": 5,
      "color": "hsl(91, 70%, 50%)"
    },
    {
      "id": "Transport",
      "label": "Transport",
      "value": 15,
      "color": "hsl(59, 70%, 50%)"
    },
    {
      "id": "Tesla",
      "label": "Tesla",
      "value": 51,
      "color": "hsl(227, 70%, 50%)"
    },
    {
      "id": "Medicine",
      "label": "Medicine",
      "value": 19,
      "color": "hsl(64, 70%, 50%)"
    },
    {
      "id": "Developing countries",
      "label": "Developing countries",
      "value": 10,
      "color": "hsl(268, 70%, 50%)"
    }
  ];

  return <div>
    <section className={classNames('section')}>
      <div className="container" style={{
        width: 1000,
        height: 500,
      }}>
        <ResponsiveLine
          data={chartData}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Year',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Portfolio size, ‎€',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          colors={{ scheme: 'nivo' }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
          enableArea={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
      </div>
    </section>
    <section className={classNames('section')}>
      <div className="container" style={{
        width: 1000,
        height: 500,
      }}>
        <ResponsivePie
          data={responsivePieData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ scheme: 'nivo' }}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor={{ from: 'color' }}
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#333333"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          fill={[
            {
              match: {
                id: 'ruby'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'c'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'go'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'python'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'scala'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'lisp'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'elixir'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'javascript'
              },
              id: 'lines'
            }
          ]}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              translateY: 56,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#999',
              symbolSize: 18,
              symbolShape: 'circle',
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
      </div>
    </section >
  </div>;



  // <div style={{
  //   border: '1px solid #ccc',
  //   width: 1000,
  //   height: 1000,
  // }}>

  // </div>;
}

