import React from 'react';
import Filter from './Filter';
import TableIfood from './TableIfood';

export default function Ifood() {
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="font-bold text-4xl mt-8 mb-2 ml-4">Order List</h1>
        <Filter />
      </div>
      <div className="mt-10">
        <TableIfood />
      </div>
    </div>
  );
}
