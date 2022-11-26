import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './Piechart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Walk', 'Run', 'Cycling', 'Swimmimg', 'Hike', ],
  datasets: [
    {
      label: '# Time',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(134, 227, 206, 1)',
        'rgba(208, 230, 165, 1)',
        'rgba(255, 221, 148, 1)',
        'rgba(250, 137, 123, 1)',
        'rgba(204, 171, 216, 1)',
        
      ],
      borderWidth: 1,
    },
  ],
};

function Piechart() {
    return(
      <div className="Piechart-area">
        <Pie data={data}/>
      </div>
      )
  }

export default Piechart;