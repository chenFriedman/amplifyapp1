import React from 'react';

import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    }
  },
};

const labels = ['Open', 'High', 'Low', 'Close'];

export default function BitcoinChart(Props : props) {
  const label = Props.date !== undefined ? Props.date?.toDateString() : 'Select Date To See graph values';
  const data = Props.data;
  return <Line options={options} data={{labels, datasets: [ { label, data, borderColor: '#40c4ff'}]}} />;
}

interface props {
  date: Date | null;
  data: (number | null)[];
}
