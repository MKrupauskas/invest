import React from 'react';
import PerformanceChart from './PerformanceChart';

export default () => {
  const chartData = [
    {
      "id": "japan",
      "color": "hsl(266, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 32
        },
        {
          "x": "helicopter",
          "y": 236
        },
        {
          "x": "boat",
          "y": 3
        },
        {
          "x": "train",
          "y": 269
        },
        {
          "x": "subway",
          "y": 16
        },
        {
          "x": "bus",
          "y": 29
        },
        {
          "x": "car",
          "y": 271
        },
        {
          "x": "moto",
          "y": 273
        },
        {
          "x": "bicycle",
          "y": 55
        },
        {
          "x": "horse",
          "y": 137
        },
        {
          "x": "skateboard",
          "y": 188
        },
        {
          "x": "others",
          "y": 149
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(334, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 38
        },
        {
          "x": "helicopter",
          "y": 236
        },
        {
          "x": "boat",
          "y": 57
        },
        {
          "x": "train",
          "y": 275
        },
        {
          "x": "subway",
          "y": 294
        },
        {
          "x": "bus",
          "y": 282
        },
        {
          "x": "car",
          "y": 37
        },
        {
          "x": "moto",
          "y": 166
        },
        {
          "x": "bicycle",
          "y": 64
        },
        {
          "x": "horse",
          "y": 176
        },
        {
          "x": "skateboard",
          "y": 165
        },
        {
          "x": "others",
          "y": 60
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(314, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 87
        },
        {
          "x": "helicopter",
          "y": 91
        },
        {
          "x": "boat",
          "y": 207
        },
        {
          "x": "train",
          "y": 159
        },
        {
          "x": "subway",
          "y": 59
        },
        {
          "x": "bus",
          "y": 264
        },
        {
          "x": "car",
          "y": 287
        },
        {
          "x": "moto",
          "y": 53
        },
        {
          "x": "bicycle",
          "y": 225
        },
        {
          "x": "horse",
          "y": 136
        },
        {
          "x": "skateboard",
          "y": 165
        },
        {
          "x": "others",
          "y": 1
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(4, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 230
        },
        {
          "x": "helicopter",
          "y": 253
        },
        {
          "x": "boat",
          "y": 17
        },
        {
          "x": "train",
          "y": 92
        },
        {
          "x": "subway",
          "y": 269
        },
        {
          "x": "bus",
          "y": 236
        },
        {
          "x": "car",
          "y": 259
        },
        {
          "x": "moto",
          "y": 117
        },
        {
          "x": "bicycle",
          "y": 259
        },
        {
          "x": "horse",
          "y": 258
        },
        {
          "x": "skateboard",
          "y": 86
        },
        {
          "x": "others",
          "y": 5
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(46, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 296
        },
        {
          "x": "helicopter",
          "y": 1
        },
        {
          "x": "boat",
          "y": 159
        },
        {
          "x": "train",
          "y": 146
        },
        {
          "x": "subway",
          "y": 213
        },
        {
          "x": "bus",
          "y": 211
        },
        {
          "x": "car",
          "y": 11
        },
        {
          "x": "moto",
          "y": 187
        },
        {
          "x": "bicycle",
          "y": 224
        },
        {
          "x": "horse",
          "y": 293
        },
        {
          "x": "skateboard",
          "y": 284
        },
        {
          "x": "others",
          "y": 93
        }
      ]
    }
  ];
  return <div style={{
    border: '1px solid #ccc',
    width: 1000,
    height: 1000,
  }}>
    <PerformanceChart data={chartData} />
  </div>;
}

