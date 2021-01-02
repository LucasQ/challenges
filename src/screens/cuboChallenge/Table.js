import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Table({ data }) {
  function renderElement() {
    const tableItems = data.map((item, index) => {
      return [
        // eslint-disable-next-line no-underscore-dangle
        <tr key={item._id}>
          <td className="border px-3 py-1 border-gray-300">{index + 1}</td>
          <td className="border border-gray-300 pl-2">{item.name}</td>
          <td className="border border-gray-300 pl-2">{item.lastName}</td>
          <td className="border border-gray-300 text-center">
            {`${item.participation}%`}
          </td>
        </tr>,
      ];
    });
    return tableItems;
  }

  useEffect(() => {
    renderElement();
  }, [data]);

  return (
    <table className="table-fixed border-collapse border">
      <thead>
        <tr>
          <th className="border px-3 py-1 border-gray-300"> </th>
          <th className="border px-12 py-1 border-gray-300">First name</th>
          <th className="border px-20 py-1 border-gray-300">Last name</th>
          <th className="border px-2 py-1 border-gray-300">Participation</th>
        </tr>
      </thead>
      <tbody>{renderElement()}</tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(
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
