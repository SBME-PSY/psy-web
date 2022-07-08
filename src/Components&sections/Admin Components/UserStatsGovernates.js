import React from 'react';
import ReactEcharts from 'echarts-for-react';

function UserStatsGovernates({ data }) {
  let governrateNames = [];
  let numDoctors = [];
  for (var i = 0; i < data.length; i++) {
    governrateNames.push(data[i]._id);
    numDoctors.push(data[i].numUsers);
    data[i]['name'] = data[i]['_id'];
    data[i]['value'] = data[i]['numUsers'];
    delete data[i]['_id'];
    delete data[i]['numUsers'];
  }

  const option = {
    title: {
      text: 'governorate',
      subtext: 'statistics',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: governrateNames,
    },
    series: [
      {
        name: 'Governrate',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
  return (
    <div>
      <h4>User Governorate</h4>
      <ReactEcharts option={option} />
    </div>
  );
}

export default UserStatsGovernates;
