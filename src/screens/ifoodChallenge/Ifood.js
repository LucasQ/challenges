import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import TableIfood from './TableIfood';
import getData from '../../services/ifoodChallenge/clientService';

export default function Ifood() {
  const [data, setData] = useState();

  useEffect(() => {
    getData()
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="font-bold text-4xl mt-8 mb-2 ml-4">Order List</h1>
        <Filter />
      </div>
      <div className="mt-10">
        <TableIfood data={data} />
      </div>
    </div>
  );
}
