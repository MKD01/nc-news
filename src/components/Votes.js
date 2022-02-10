import React, { useState } from 'react';
import { patchArticleVotes } from '../utils/api';

const Votes = ({ votes, article_id }) => {
  const [votesChange, setVotesChange] = useState(0);

  const votesHandler = () => {
    setVotesChange((currValue) => currValue + 1);
    patchArticleVotes(article_id);
  };

  return <button onClick={votesHandler}>Votes: {votes + votesChange}</button>;
};

export default Votes;
