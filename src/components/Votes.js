import React, { useState } from 'react';
import { patchComponentVotes } from '../utils/api';

const Votes = ({ component_name, votes, component_id }) => {
  const [votesChange, setVotesChange] = useState(0);

  const upVotesHandler = () => {
    setVotesChange((currValue) => currValue + 1);
    patchComponentVotes(component_name, component_id, 1);
  };

  const DownVotesHandler = () => {
    setVotesChange((currValue) => currValue - 1);
    patchComponentVotes(component_name, component_id, -1);
  };

  return (
    <div>
      <button onClick={upVotesHandler}>↑</button>
      <a>{` ${votes + votesChange} `}</a>
      <button onClick={DownVotesHandler}>↓</button>
    </div>
  );
};

export default Votes;
