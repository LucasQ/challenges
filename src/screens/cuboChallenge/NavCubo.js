import React from 'react';

export default function NavCubo() {
  return (
    <div className="bg-blue-400	h-32">
      <div className="container mx-auto h-full">
        {/* <div className="mx-20 align-middle"> */}
        <div className="flex space-x-6 justify-center pt-10 mx-32">
          <input
            type="text"
            placeholder="First name"
            className="px-6 h-12 rounded"
          />
          <input
            type="text"
            placeholder="Last name"
            className="px-6 rounded h-12"
          />
          <input
            type="text"
            placeholder="Participation"
            className="px-6 rounded h-12"
          />
          <input
            type="submit"
            value="SEND"
            className="px-10 rounded bg-blue-400 font-bold text-lg text-white border-white border-2"
          />
        </div>
      </div>
    </div>
    // </div>
  );
}
