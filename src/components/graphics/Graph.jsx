import React, { useState, useEffect } from 'react';
import { db } from '../../config/firebaseConfig';
import { ref, onValue } from 'firebase/database';
import ReactApexChart from 'react-apexcharts';

export const Graph = () => {
  const [reserves, setReserves] = useState([]);

  useEffect(() => {
    const reservesRef = ref(db, 'PastReserves');

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
        type: 'pie',
      },
      labels: ['Pendiente', 'Concluida', 'Aceptada', 'Cancelada'],
    },
  };

  // Procesa los datos para contar los estados
  reserves.forEach((reserva) => {
    if (reserva.State === 'Pendiente') {
      chartData.series[0] += 1;
    } else if (reserva.State === 'Concluida') {
      chartData.series[1] += 1;
    } else if (reserva.State === 'Aceptada') {
      chartData.series[2] += 1;
    } else if (reserva.State === 'Cancelada') {
      chartData.series[3] += 1;
    }
  });

  return (
    <ReactApexChart options={chartData.options} series={chartData.series} type="pie" />
  );
}
