import React from 'react';
import ReactEcharts from 'echarts-for-react';

function ResultsTestsStats({ data: tests }) {
  let keys = [];
  let values = [];
  tests.forEach((test) => {
    keys.push(test._id.en);
    values.push(test.numPatients);
  });
  const option = {
    xAxis: {
      type: 'category',
      data: keys,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: values,
        type: 'line',
      },
    ],
  };
  return (
    <div>
      <h4>The number of times the test was taken</h4>
      <ReactEcharts option={option} />
    </div>
  );
}

export default ResultsTestsStats;
