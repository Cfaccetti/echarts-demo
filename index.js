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