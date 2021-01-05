/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import NavCubo from './NavCubo';
import Table from './Table';
import PieChart from './PieChart';
import { getData } from '../../services/cuboChallenge/userService';

export default function Cubo() {
  const [data, setData] = useState();
  const [mount, SetDidMount] = useState(false);

  useEffect(() => {
    getData()
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [mount]);

  function bindData() {
    SetDidMount(!mount);
  }

  return (
    <div>
      <NavCubo submitData={bindData.bind(this)} />
      <div className="container mx-auto">
        <div className="flex justify-center mx-32 flex-col">
          <div className=" flex-1 flex-row text-center mt-14">
            <h1 className="font-bold text-4xl	">DATA</h1>
            <h3 className="mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
          </div>
          <div className="flex space-x-32">
            <div className="flex-2 mt-14">{data && <Table data={data} />}</div>
            <div className="flex-2 mt-6">
              {data && <PieChart users={data} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
