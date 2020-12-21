import React from 'react';
import NavCubo from './NavCubo';
import Table from './Table';

export default function Cubo() {
  return (
    <div>
      <NavCubo />
      <div className="container mx-auto">
        <div className="flex justify-center mx-32 flex-col">
          <div className=" flex-1 flex-row text-center mt-14">
            <h1 className="font-bold text-4xl	">DATA</h1>
            <h3 className="mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
          </div>
          <div className="flex-2 mt-14">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
