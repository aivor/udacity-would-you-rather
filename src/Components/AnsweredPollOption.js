import React, { Fragment } from "react";

export default function AnsweredPollOption({
  optionstyle,
  optiontext,
  option_perc,
  optionVotes,
  totalVotes,
}) {
  return (
    <Fragment>
      <p className="poll-text">Would you rather {optiontext}</p>
      <div className="progress " style={{ height: "30px" }}>
        <div
          className={optionstyle}
          role="progressbar"
          style={{ width: `${option_perc}%` }}
          aria-valuenow={option_perc}
          aria-valuemin="0"
          aria-valuemax="100"
        >{`${option_perc}%`}</div>
      </div>
      <p className="poll-vote">
        {optionVotes} out of {totalVotes} votes{" "}
      </p>
    </Fragment>
  );
}
