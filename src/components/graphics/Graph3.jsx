import React, { useState, useEffect } from 'react';
import { db } from '../../config/firebaseConfig';
import { ref, onValue } from 'firebase/database';
import ReactApexChart from 'react-apexcharts';

export const Graph3 = () => {
  const [usersByCareer, setUsersByCareer] = useState({});
  
  useEffect(() => {
    const usersRef = ref(db, 'Users');

    onValue(usersRef, (snapshot) => {
      const usersData = snapshot.val();

      if (usersData) {
        const careersCount = {};

        Object.values(usersData).forEach((user) => {
          const career = user.Career;
          if (careersCount[career]) {
            careersCount[career] += 1;
          } else {
            careersCount[career] = 1;
          }
        });

        setUsersByCareer(careersCount);
      }
    });
  }, []);

  const chartData = {
    series: Object.values(usersByCareer), // Cada valor representa la cantidad de usuarios por carrera
    options: {
      chart: {
        height: 390,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          startAngle: 0,
          endAngle: 270,
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      labels: Object.keys(usersByCareer), // Nombres de las carreras
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'center',
        offsetX: 160,
        offsetY: 15,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter: function (seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col stats">
          <div id="chart">
            <ReactApexChart options={chartData.options} series={chartData.series} type="radialBar" />
          </div>
        </div>
      </div>
    </div>
  );
};
