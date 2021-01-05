import React, { useState } from 'react';
import Modal from './Modal';

export default function TableIfood() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(true);
  }

  function hideModal() {
    setShow(false);
  }

  return (
    <div className="flex justify-center">
      <table className="table-fixed border-collapse border">
        <thead>
          <tr className="bg-gray-300" onClick={handleClick}>
            <th className="border px-12 py-1 border-black">Date</th>
            <th className="border px-14 py-1 border-black">Client Name</th>
            <th className="border px-20 py-1 border-black">Phone</th>
            <th className="border px-24 py-1 border-black">E-mail</th>
            <th className="border px-12 py-1 border-black">Total Value</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={handleClick}>
            <td className="border border-black pl-2">Intro to CSS</td>
            <td className="border border-black pl-2">Adam</td>
            <td className="border border-black pl-2">858</td>
            <td className="border border-black pl-2">Adam</td>
            <td className="border border-black pl-2">858</td>
          </tr>
          <tr className="bg-emerald-200" onClick={handleClick}>
            <td className="border border-black pl-2 bg-gray-100">A Long </td>
            <td className="border border-black pl-2 bg-gray-100">Adam</td>
            <td className="border border-black pl-2 bg-gray-100">112</td>
            <td className="border border-black pl-2 bg-gray-100">Adam</td>
            <td className="border border-black pl-2 bg-gray-100">858</td>
          </tr>
          <tr onClick={handleClick}>
            <td className="border border-black pl-2">Intro </td>
            <td className="border border-black pl-2">Chris</td>
            <td className="border border-black pl-2">1,280</td>
            <td className="border border-black pl-2">Adam</td>
            <td className="border border-black pl-2">858</td>
          </tr>
        </tbody>
      </table>
      <Modal show={show} handleClose={hideModal} />
    </div>
  );
}
