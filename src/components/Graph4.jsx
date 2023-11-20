import React, { useState, useEffect } from 'react';
import { db } from '../config/firebaseConfig';
import { ref, onValue } from 'firebase/database';
import ApexCharts from 'react-apexcharts';

export const Graph4 = () => {
  const [reservationData, setReservationData] = useState([]);
  
  useEffect(() => {
    const reservationsRef = ref(db, 'PastReserves');

    onValue(reservationsRef, (snapshot) => {
      const reservations = snapshot.val();

      if (reservations) {
        // Filtra las reservas realizadas en los meses de agosto, septiembre, octubre y noviembre
        const filteredReservations = Object.values(reservations).filter((reservation) => {
          const datetimeStart = new Date(reservation.DatetimeStart);
          const month = datetimeStart.getMonth() + 1; // Los meses son 0-indexados, por lo que agregamos 1
          return month >= 8 && month <= 11;
        });

        // Crea un objeto que almacena la cantidad de reservas por mes
        const reservationsByMonth = {
          August: 0,
          September: 0,
          October: 0,
          November: 0,
        };

        filteredReservations.forEach((reservation) => {
          const datetimeStart = new Date(reservation.DatetimeStart);
          const month = datetimeStart.getMonth();
          switch (month) {
            case 7:
              reservationsByMonth.August += 1;
              break;
            case 8:
              reservationsByMonth.September += 1;
              break;
            case 9:
              reservationsByMonth.October += 1;
              break;
            case 10:
              reservationsByMonth.November += 1;
              break;
            default:
              break;
          }
        });

        setReservationData(reservationsByMonth);
      }
    });
  }, []);

  const chartData = {
    series: [{
      name: "Reservas",
      data: Object.values(reservationData),
    }],
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      
      align: 'left'
    },
    subtitle: {
      
      align: 'left'
    },
    labels: Object.keys(reservationData),
    xaxis: {
      type: 'category',
    },
    yaxis: {
      opposite: true
    },
    legend: {
      horizontalAlign: 'left'
    },
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col stats">
          <div id="chart">
            <ApexCharts options={chartData} series={chartData.series} type="area" />
          </div>
        </div>
      </div>
    </div>
  );
};
