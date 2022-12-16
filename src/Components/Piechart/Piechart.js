import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './Piechart.css';
import { useContext } from 'react'
import ActivityContext from '../Context/ActivityContext';

ChartJS.register(ArcElement, Tooltip, Legend);

function Piechart() {
  const { runDuration, walkDuration, swimmingDuration, bicyclerideDuration, hikingDuration } = useContext(ActivityContext)
  let duration = 0
  const run = (runDuration.map(data => data.duration)).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    duration
  ); 

  const walk = (walkDuration.map(data => data.duration)).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    duration
  ); 

  const swimming = (swimmingDuration.map(data => data.duration)).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    duration
  ); 

  const bicycleride = (bicyclerideDuration.map(data => data.duration)).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    duration
  ); 

  const hiking = (hikingDuration.map(data => data.duration)).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    duration
  ); 

  const data = {
    labels: ['Walk', 'Run', 'Bicycle Ride', 'Swimmimg', 'Hiking',],
    datasets: [
      {
        label: '# Time',
        data: [walk, run, bicycleride, swimming, hiking],
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

  return (
    <div className="Piechart-area">
      <Pie data={data} />
    </div>
  )
}

export default Piechart;