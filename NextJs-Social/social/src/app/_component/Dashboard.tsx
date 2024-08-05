'use client';
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import Login from '../layouts/login';

const Dashboard = () => {
  const [areachartOptions, setAreaChartOptions] = useState({
    chart: {
      type: 'area', // explicitly typed as 'area'
      height: 150,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ]);



  const [columnchartOptions, setColumnChartOptions] = useState({
    chart:{
      type:"bar",
      height:150,
    },
    dataLabels:{
      enabled:false
    },
    stroke:{
      curve:'smooth'
    },
    xaxis:{
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    tooltip:{
      enabled:true
    },
  });
  const [seriescol , setSeriesCol]= useState([
      {
        name:'Completed Event',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
      }
  ])

  



  return (
    <>
      <div className='flex w-full border-2 border-red-700'>
        <div>
          <Chart options={areachartOptions} series={series} type='area' height={150} />
        </div>
        <div>
          <Chart options={columnchartOptions} series={seriescol} type='bar' height={150}/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
