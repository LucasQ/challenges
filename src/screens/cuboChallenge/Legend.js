import React from 'react';
import PropTypes from 'prop-types';

export default function Legend({ color, name }) {
  const style = {
    square: {
      width: 27,
      height: 27,
      backgroundColor: color,
      borderRadius: 7,
    },
    name: {
      color: color,
      marginLeft: 12,
    },
  };

  return (
    <div className="flex ml-4 mt-4">
      <div style={style.square} />
      <h1 style={style.name} className="font-bold">
        {name}
      </h1>
    </div>
  );
}

Legend.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
