import React from 'react';
import ReactEcharts from 'echarts-for-react';

function UserStatsGender(props) {
  const { userStat } = props;

  const userKeys = Object.keys(userStat[0]).filter((el) => {
    return el !== '_id';
  });
  const userValues = Object.values(userStat[0]).filter((el) => {
    return el !== null;
  });

  const option = {
    xAxis: {
      type: 'category',
      data: userKeys,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: userValues,
        type: 'bar',
      },
    ],
  };
  return (
    <div>
      <h4> Users Gender</h4>
      <ReactEcharts option={option} theme={'light'} />
    </div>
  );
}
export default UserStatsGender;
