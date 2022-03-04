import React, { useState } from "react";
import { patchComponentVotes } from "../utils/api";

const Votes = ({ component_name, votes, component_id }) => {
  const [votesChange, setVotesChange] = useState(0);
  const [upVoteBtn, setUpVoteBtn] = useState(false);
  const [downVoteBtn, setDownVoteBtn] = useState(false);

  const upVotesHandler = () => {
    setVotesChange((currValue) => currValue + 1);
    setUpVoteBtn(true);
    let voteAmount = 1;
    if (downVoteBtn) {
      voteAmount++;
      setDownVoteBtn(false);
    }
    patchComponentVotes(component_name, component_id, voteAmount);
  };

  const DownVotesHandler = () => {
    setVotesChange((currValue) => currValue - 1);
    setDownVoteBtn(true);
    let voteAmount = -1;
    if (downVoteBtn) {
      voteAmount--;
      setUpVoteBtn(false);
    }
    patchComponentVotes(component_name, component_id, voteAmount);
  };

  return (
    <div>
      <button onClick={upVotesHandler} disabled={upVoteBtn}>
        👍🏽
      </button>
      <a>{` ${votes + votesChange} `}</a>
      <button onClick={DownVotesHandler} disabled={downVoteBtn}>
        👎🏽
      </button>
    </div>
  );
};

export default Votes;
