import React from 'react';
import ReactEcharts from 'echarts-for-react';

function ResultsGovernateStats({ data }) {
  for (var i = 0; i < data.length; i++) {
    data[i]['name'] = data[i]['_id'];
    data[i]['value'] = data[i]['numPatients'];
    delete data[i]['_id'];
    delete data[i]['numUsers'];
  }

  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: data,
      },
    ],
  };
  return (
    <div>
      <h4>Tests Taken per governrate</h4>
      <ReactEcharts option={option} />
    </div>
  );
}

export default ResultsGovernateStats;
