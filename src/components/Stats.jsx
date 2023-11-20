import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Graph } from './Graph';
import { Graph2 } from './Graph2';
import { Graph3 } from './Graph3';
import { Graph4 } from './Graph4';

export const Stats = () => {
  return (
    <div className="container">
      <h1 className="title">ESTADÍSTICAS DEL CICLO 2023-II</h1>
      <br />
      <div className="row">
        <div className="col stats">
          <h3 className="title">Estado de las reservas</h3>
          
          <Graph />
        </div>
        <div className="col stats">
          <h3 className="title">Software disponible en las computadoras</h3>
          <div className="col stats">
          <Graph2 />
            
          </div>

        
        </div>
      </div>

      <div className="row">
        <div className="col stats">
          <h3 className="title">Carreras con mas reservas</h3>
          
          <Graph4 />
        </div>
        <div className="col stats">
          <h3 className="title">Números de reservas por mes</h3>
          <div className="col stats">
          <Graph3 />
            
          </div>

        
        </div>
      </div>
      <br />
      

    </div>
  );
}
