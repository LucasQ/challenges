import React from 'react';

export default function NavCubo() {
  function handleSubmit(value) {
    console.log(value);
  }
  return (
    <div className="bg-blue-400	h-32">
      <div className="container mx-auto h-full">
        <div className="flex space-x-6 justify-center pt-10 mx-32">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First name"
              className="px-6 h-12 rounded"
              name="name"
            />
            <input
              type="text"
              placeholder="Last name"
              className="px-6 rounded h-12"
              name="name2"
            />
            <input
              type="text"
              placeholder="Participation"
              className="px-6 rounded h-12"
              name="participation"
            />
            <input
              type="submit"
              value="SEND"
              className="px-10 rounded bg-blue-400 font-bold text-lg text-white border-white border-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
