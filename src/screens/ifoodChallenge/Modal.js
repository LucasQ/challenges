import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default function Modal({ show, handleClose }) {
  const showHideModal = show ? 'block' : 'block';

  return (
    <div
      className={`${showHideModal} inset-0 overflow-auto bg-white border border-black z-50 cursor-pointer w-2/4 h-1/4 left-2/4 top-1/4 transform -translate-x-1/2 translate-y-1/2 absolute`}
    >
      <header className="border-b-2 h-9 border-black">
        <button
          type="button"
          onClick={handleClose}
          className="relative float-right border border-black px-1.5 m-1"
        >
          <FontAwesomeIcon icon={faTimes} size="1x" />
        </button>
        <h1 className="text-center pt-1 font-semibold">Order Details</h1>
      </header>
      <div className="flex mt-3">
        <div className="flex flex-1 justify-center space-x-1">
          <h5>Client Name:</h5>
          <p className="font-bold">John Doe</p>
        </div>
        <div className="flex flex-1 justify-center space-x-1">
          <h5>Phone: </h5>
          <p className="font-bold">1234-56789</p>
        </div>
        <div className="flex flex-1 justify-center space-x-1">
          <h5>E-mail: </h5>
          <p className="font-bold">john@gmail.com</p>
        </div>
      </div>
      <div className="flex justify-center mt-8 text-center">
        <table className="table-fixed border-collapse border">
          <thead>
            <tr className="bg-gray-300">
              <th className="border px-11 py-1 border-black">Description</th>
              <th className="border px-11 py-1 border-black">Quantity</th>
              <th className="border px-11 py-1 border-black">Unit Price</th>
              <th className="border px-11 py-1 border-black">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black pl-2">Intro to CSS</td>
              <td className="border border-black pl-2">Adam</td>
              <td className="border border-black pl-2">858</td>
              <td className="border border-black pl-2">Adam</td>
            </tr>
            <tr className="bg-emerald-200">
              <td className="border border-black pl-2 bg-gray-100">A Long </td>
              <td className="border border-black pl-2 bg-gray-100">Adam</td>
              <td className="border border-black pl-2 bg-gray-100">112</td>
              <td className="border border-black pl-2 bg-gray-100">Adam</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
