import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

export default function Filter() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="border-black border-2">
      <div className="grid grid-cols-5 px-5 grid-flow-row pt-5 pb-8">
        <div className="text-center">
          <h3 className="font-medium">Start date</h3>
          <DatePicker
            onChange={onChange}
            value={value}
            clearIcon={null}
            dayPlaceholder="dd"
            format="dd-MM-y"
            classame=""
          />
        </div>
        <div className="text-center">
          <h3 className="font-medium">End date</h3>
          <DatePicker
            onChange={onChange}
            value={value}
            clearIcon={null}
            dayPlaceholder="dd"
            format="dd-MM-y"
          />
        </div>
        <div className="text-center">
          <h3 className="font-medium">Client Name</h3>
          <input
            type="text"
            className="border border-black rounded-none py-0.5"
          />
        </div>

        <div className="text-center">
          <h3 className="font-medium">Phone</h3>
          <input
            type="text"
            className="border border-black rounded-none py-0.5"
          />
        </div>
        <div className="text-center">
          <h3 className="font-medium">Email</h3>
          <input
            type="text"
            className="border border-black rounded-none py-0.5"
          />
        </div>
      </div>
      <div className="flex justify-center pb-4">
        <input
          type="submit"
          value="Search"
          className="px-10 py-1 bg-white border border-black rounded-xl"
        />
      </div>
    </div>
  );
}
