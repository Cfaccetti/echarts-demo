var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

// Labels for axis ticks
const hours = [
    '12am', '1am', '2am', '3am', '4am', '5am', '6am',
    '7am', '8am', '9am', '10am', '11am',
    '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
    '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'
];
// Label for single axis
const days = [
    'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday', 'Sunday'
];
let title = [];
let singleAxis = [];
let series = [];
// This data simulates return data from an API.
const data = [
    [0, 0, 4],
    [0, 1, 4],
    [0, 2, 40],
    [0, 3, 40],
    [0, 4, 40],
    [0, 5, 41],
    [0, 6, 40],
    [0, 7, 40],
    [0, 8, 53],
    [0, 9, 56],
    [0, 10, 72],
    [0, 11, 74],
    [0, 12, 49],
    [0, 13, 47],
    [0, 14, 77],
    [0, 15, 73],
    [0, 16, 48],
    [0, 17, 47],
    [0, 18, 44],
    [0, 19, 42],
    [0, 20, 42],
    [0, 21, 41],
    [0, 22, 41],
    [0, 23, 41],
    [1, 0, 40],
    [1, 1, 40],
    [1, 2, 40],
    [1, 3, 40],
    [1, 4, 40],
    [1, 5, 40],
    [1, 6, 40],
    [1, 7, 41],
    [1, 8, 44],
    [1, 9, 49],
    [1, 10, 92],
    [1, 11, 22],
    [1, 12, 22],
    [1, 13, 20],
    [1, 14, 87],
    [1, 15, 77],
    [1, 16, 72],
    [1, 17, 72],
    [1, 18, 49],
    [1, 19, 46],
    [1, 20, 44],
    [1, 21, 29],
    [1, 22, 43],
    [1, 23, 29],
    [2, 0, 42],
    [2, 1, 38],
    [2, 2, 41],
    [2, 3, 41],
    [2, 4, 40],
    [2, 5, 40],
    [2, 6, 40],
    [2, 7, 40],
    [2, 8, 42],
    [2, 9, 47],
    [2, 10, 49],
    [2, 11, 79],
    [2, 12, 66],
    [2, 13, 90],
    [2, 14, 97],
    [2, 15, 67],
    [2, 16, 61],
    [2, 17, 73],
    [2, 18, 48],
    [2, 19, 46],
    [2, 20, 24],
    [2, 21, 41],
    [2, 22, 45],
    [2, 23, 23],
    [3, 0, 36],
    [3, 1, 39],
    [3, 2, 35],
    [3, 3, 42],
    [3, 4, 35],
    [3, 5, 42],
    [3, 6, 42],
    [3, 7, 38],
    [3, 8, 51],
    [3, 9, 68],
    [3, 10, 74],
    [3, 11, 96],
    [3, 12, 20],
    [3, 13, 24],
    [3, 14, 24],
    [3, 15, 21],
    [3, 16, 20],
    [3, 17, 22],
    [3, 18, 20],
    [3, 19, 20],
    [3, 20, 97],
    [3, 21, 89],
    [3, 22, 80],
    [3, 23, 73],
    [4, 0, 67],
    [4, 1, 61],
    [4, 2, 57],
    [4, 3, 53],
    [4, 4, 51],
    [4, 5, 50],
    [4, 6, 50],
    [4, 7, 49],
    [4, 8, 66],
    [4, 9, 72],
    [4, 10, 64],
    [4, 11, 61],
    [4, 12, 79],
    [4, 13, 68],
    [4, 14, 61],
    [4, 15, 60],
    [4, 16, 79],
    [4, 17, 41],
    [4, 18, 24],
    [4, 19, 23],
    [4, 20, 40],
    [4, 21, 43],
    [4, 22, 40],
    [4, 23, 26],
    [5, 0, 29],
    [5, 1, 36],
    [5, 2, 40],
    [5, 3, 43],
    [5, 4, 42],
    [5, 5, 35],
    [5, 6, 20],
    [5, 7, 17],
    [5, 8, 24],
    [5, 9, 38],
    [5, 10, 28],
    [5, 11, 61],
    [5, 12, 79],
    [5, 13, 68],
    [5, 14, 61],
    [5, 15, 60],
    [5, 16, 79],
    [5, 17, 41],
    [5, 18, 24],
    [5, 19, 23],
    [5, 20, 40],
    [5, 21, 43],
    [5, 22, 40],
    [5, 23, 26],
    [6, 0, 29],
    [6, 1, 36],
    [6, 2, 40],
    [6, 3, 43],
    [6, 4, 42],
    [6, 5, 35],
    [6, 6, 20],
    [6, 7, 17],
    [6, 8, 24],
    [6, 9, 38],
    [6, 10, 28],
    [6, 11, 61],
    [6, 12, 79],
    [6, 13, 68],
    [6, 14, 61],
    [6, 15, 60],
    [6, 16, 79],
    [6, 17, 41],
    [6, 18, 24],
    [6, 19, 23],
    [6, 20, 40],
    [6, 21, 43],
    [6, 22, 40],
    [6, 23, 26]
];
days.forEach(function (day, idx) {
    title.push({
      textBaseline: 'middle',
      top: ((idx + 0.5) * 100) / 7 + '%',
      text: day
    });
    singleAxis.push({
      left: 150,
      type: 'category',
      boundaryGap: false,
      data: hours,
      top: (idx * 100) /7 + 5 + '%',
      height: 100 / 7 - 10 + '%',
      width: '68%',
      axisLabel: {
        interval: 2
      }
    });
    series.push({
      name: day,
      singleAxisIndex: idx,
      coordinateSystem: 'singleAxis',
      type: 'scatter',
      data: [],
    });
  });

// Creates the data object inside each series object. 
// For each day, the data object is 0-23, representing the hour
// plus the occupancy expressed as number of people in the building.
// e.g. [1, 3] equals 01:00, 3 people in the building.
data.forEach(function (dataItem) {
    series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
  });

// assigns the previously defined properties to the option object
option = {
    tooltip: {
      position: 'top'
    },
    title: title,
    singleAxis: singleAxis,
    series: series,
    // defines the legend properties
    visualMap: { 
        type: 'continuous',
        left: 'right',
        top: 'middle',
        min: 0,
        max: 100,
        itemHeight: 150,
        itemWidth: 40,
        calculable: true,
        text: ['Number of people'],
        textGap: 10,
        textStyle: {
          fontSize: 14,
        },
        inRange: {
          symbolSize: [0,60],
          color: ['#B79CED', '#957FEF', '#7161EF'],
          opacity: [0.6,0.9]
        },
      },
  };
  
  // assigns option object to chart and plot
  option && myChart.setOption(option);