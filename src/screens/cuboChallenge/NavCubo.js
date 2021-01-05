import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { insertUser } from '../../services/cuboChallenge/userService';

export default function NavCubo({ submitData }) {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [participation, setParticipation] = useState();

  function handleSubmit(e) {
    const data = {
      name: name,
      lastName: lastName,
      participation: participation,
    };
    insertUser(data)
      // eslint-disable-next-line no-unused-vars
      .then((_) => submitData())
      .catch((err) => {
        throw err;
      });

    e.preventDefault();
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleParticipationChange(e) {
    setParticipation(e.target.value);
  }

  return (
    <div className="bg-blue-400 h-32">
      <form onSubmit={handleSubmit}>
        <div className="container mx-auto h-full">
          <div className="flex space-x-6 justify-center pt-10 mx-32">
            <input
              type="text"
              placeholder="First name"
              className="px-6 h-12 rounded"
              name="name"
              onChange={handleNameChange}
            />
            <input
              type="text"
              placeholder="Last name"
              className="px-6 rounded h-12"
              name="name2"
              onChange={handleLastNameChange}
            />
            <input
              type="text"
              placeholder="Participation"
              className="px-6 rounded h-12"
              name="participation"
              onChange={handleParticipationChange}
            />
            <input
              type="submit"
              value="SEND"
              className="px-10 rounded bg-blue-400 font-bold text-lg text-white border-white border-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

NavCubo.propTypes = {
  submitData: PropTypes.func.isRequired,
};
