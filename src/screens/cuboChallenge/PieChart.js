import React, { useEffect } from 'react';
import Chart from 'chart.js';
import Legend from './Legend';

export default function PieChart() {
  const data = {
    data: {
      datasets: [
        {
          backgroundColor: [
            '#ff0000',
            '#0039e6',
            '#33cc33',
            '#33ccff',
            '#e6e600',
          ],
          data: [2478, 5267, 734, 784, 433],
        },
      ],
    },
    options: {
      tooltips: { enabled: false },
      hover: { mode: null },
      responsive: false,
    },
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const ctx = document.getElementById('myChart');
    // eslint-disable-next-line no-new
    new Chart(ctx, {
      type: 'doughnut',
      data: data.data,
      options: data.options,
    });
  });

  function renderLegend() {
    const items = [
      { name: 'Hugo Silva', color: 'blue' },
      { name: 'Carlos Moura', color: 'red' },
      { name: 'Eliza Souza', color: 'yellow' },
      { name: 'Fernanda Oliveira', color: 'grey' },
      { name: 'Anderson Santos', color: 'green' },
    ];
    const legends = items.map((item, index) => {
      // eslint-disable-next-line react/no-array-index-key
      return <Legend key={index} name={item.name} color={item.color} />;
    });
    return legends;
  }

  return (
    <div className="flex">
      <canvas id="myChart" width="250" height="250" />
      <div>{renderLegend()}</div>
    </div>
  );
}
