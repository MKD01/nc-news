import React, { useState } from "react";
import { patchComponentVotes } from "../utils/api";

const Votes = ({ component_name, votes, component_id }) => {
  const [votesChange, setVotesChange] = useState(0);
  const [upVoteBtn, setUpVoteBtn] = useState(false);
  const [downVoteBtn, setDownVoteBtn] = useState(false);

  const upVotesHandler = () => {
    let voteAmount = 1;
    if (downVoteBtn) {
      voteAmount++;
      setDownVoteBtn(false);
      setVotesChange((currValue) => currValue + 2);
    } else {
      setVotesChange((currValue) => currValue + 1);
    }
    setUpVoteBtn(true);
    patchComponentVotes(component_name, component_id, voteAmount);
  };

  const DownVotesHandler = () => {
    let voteAmount = -1;
    if (upVoteBtn) {
      voteAmount--;
      setUpVoteBtn(false);
      setVotesChange((currValue) => currValue - 2);
    } else {
      setVotesChange((currValue) => currValue - 1);
    }
    setDownVoteBtn(true);
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
