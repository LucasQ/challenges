import React, { useEffect } from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import Legend from './Legend';
import capitalizeFirstLetter from '../../Utils';

export default function PieChart({ users }) {
  const data = {
    data: {
      datasets: [
        {
          backgroundColor: backgroundColors(),
          data: usersParticipation(),
        },
      ],
    },
    options: {
      tooltips: { enabled: false },
      hover: { mode: null },
      responsive: false,
    },
  };

  function backgroundColors() {
    const colors = ['#ff0000', '#0039e6', '#33cc33', '#33ccff', '#e6e600'];
    let count = 0;
    const arrayColors = [];

    for (let i = 0; i < users.length + 1; i++) {
      if (count === colors.length) {
        count = 0;
      }
      arrayColors.push(colors[count]);
      count++;
    }

    return arrayColors;
  }

  function usersParticipation() {
    return users.map((e) => {
      return e.participation;
    });
  }

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
    const colors = backgroundColors();
    const legends = [];

    for (let i = 0; i < users.length; i++) {
      legends.push(
        <Legend
          key={users[i]._id}
          name={`${capitalizeFirstLetter(
            users[i].name
          )} ${capitalizeFirstLetter(users[i].lastName)}`}
          color={colors[i]}
        />
      );
    }

    return legends;
  }

  return (
    <div className="flex">
      <canvas id="myChart" width="380" height="380" />
      <div>{renderLegend()}</div>
    </div>
  );
}

PieChart.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      lastName: PropTypes.string,
      name: PropTypes.string,
      participation: PropTypes.number,
      date: PropTypes.string,
      _v: PropTypes.number,
    })
  ).isRequired,
};
