import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import LeaderBoardCard from "./LeaderBoardCard";

class LeaderBoard extends Component {
  render() {
    console.log("users", this.props.usersId);
    const trophyColors = ["green", "orange", "whte"];
    return (
      <Fragment>
        {this.props.usersId.map((id, idx) => (
          <div className="card leaderboard-card" key={id}>
            <LeaderBoardCard id={id} trophyColor={trophyColors[idx]} />
          </div>
        ))}
      </Fragment>
    );
  }
}
function mapStateToProps({ users }) {
  const usersId = Object.keys(users).sort(
    (a, b) =>
      Object.keys(users[b].answers).length +
      users[b].questions.length -
      (users[a].questions.length + Object.keys(users[a].answers).length)
  );
  return {
    usersId,
    users,
  };
}
export default connect(mapStateToProps)(LeaderBoard);
