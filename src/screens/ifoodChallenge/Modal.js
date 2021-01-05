import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default function Modal({ show, handleClose }) {
  const showHideModal = show ? 'block' : 'hidden';

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
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
