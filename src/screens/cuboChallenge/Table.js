import React from 'react';

export default function Table() {
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
      <tbody>
        <tr>
          <td className="border px-3 py-1 border-gray-300">1</td>
          <td className="border border-gray-300 pl-2">Intro to CSS</td>
          <td className="border border-gray-300 pl-2">Adam</td>
          <td className="border border-gray-300 text-center">858</td>
        </tr>
        <tr>
          <td className="border px-3 py-1 border-gray-300">2</td>
          <td className="border border-gray-300 pl-2">A Long and</td>
          <td className="border border-gray-300 pl-2">Adam</td>
          <td className="border border-gray-300 text-center">112</td>
        </tr>
        <tr>
          <td className="border px-3 py-1 border-gray-300">3</td>
          <td className="border border-gray-300 pl-2">Intro to JavaScript</td>
          <td className="border border-gray-300 pl-2">Chris</td>
          <td className="border border-gray-300 text-center">1,280</td>
        </tr>
      </tbody>
    </table>
  );
}
