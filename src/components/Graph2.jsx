import React, { useState, useEffect } from 'react';
import { db } from '../config/firebaseConfig';
import { ref, onValue } from 'firebase/database';
import ReactApexChart from 'react-apexcharts';

export const Graph2 = () => {
  const [reserves, setReserves] = useState([]);

  useEffect(() => {
    const reservesRef = ref(db, 'Computers');

    onValue(reservesRef, (snapshot) => {
      const reservesData = snapshot.val();

      if (reservesData) {
        
        const allReserves = Object.values(reservesData);
        setReserves(allReserves);
      }
    });
  }, []);

  const chartData = {
    series: [0, 0, 0, 0], // Inicializa los valores en 0
    options: {
      chart: {
        width: 360,
        type: 'donut',
      },
      labels: ['SapLogon, Bizagi','NetBeans, Xcode', 'Xamarin, Eclipse', 'Node, Visual Studio'],
    },
  };

  // Procesa los datos para contar los estados
  reserves.forEach((reserva) => {
    if (reserva.Software === 'SapLogon, Bizagi') {
      chartData.series[0] += 1;
    } else if (reserva.Software === 'NetBeans, XCode') {
      chartData.series[1] += 1;
    } else if (reserva.Software === 'Xamarin, Eclipse') {
      chartData.series[2] += 1;
    } else if (reserva.State === 'Node, Visual Studio') {
      chartData.series[3] += 1;
    }
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col stats">
          <div id="chart">
            <ReactApexChart options={chartData.options} series={chartData.series} type="donut" />
          </div>
        </div>
      </div>
    </div>
  );
}
