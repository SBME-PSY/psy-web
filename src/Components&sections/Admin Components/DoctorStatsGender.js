import React from 'react';
import ReactEcharts from 'echarts-for-react';

function DoctorStatsGender(props) {
  const { doctorStat } = props;
  const userKeys = Object.keys(doctorStat[0]).filter((el) => {
    return el !== '_id';
  });
  const userValues = Object.values(doctorStat[0]).filter((el) => {
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
      <h4>Doctors Gender</h4>
      <ReactEcharts option={option} theme={'light'} />
    </div>
  );
}
export default DoctorStatsGender;
