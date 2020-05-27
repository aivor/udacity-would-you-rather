import React, { Fragment } from "react";
import { connect } from "react-redux";
import { FaTrophy } from "react-icons/fa";

class Users extends React.Component {
  render() {
    const {
      name,
      avatarURL,
      questions,
      answers,
      total,
      trophyColor,
    } = this.props;

    return (
      <Fragment>
        <div id="trophyContainer">
          <FaTrophy size={20} color={trophyColor} className="trophy" />
        </div>
        <div className="row no-gutters">
          <div className="col-3 mt-2">
            <div className="leaderboard-img-wrapper">
              <img
                className="card-img rounded-circle"
                src={avatarURL}
                alt={avatarURL}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="card-body">
              <p className="leaderboard-username">{name}</p>
              <p className="leaderboard-text">
                {" "}
                Answered Questions <span>{answers}</span>{" "}
              </p>
              <p className="leaderboard-text">
                {" "}
                created Questions <span>{questions}</span>
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="card total-card">
              <div className="card-header leaderboard-text text-center">
                score
              </div>
              <div className="card-body">
                <button className="btn btn-dark btn-md ml-3">{total}</button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
function mapStateToProps({ users }, { id, trophyColor }) {
  const user = users[id];
  const name = user.name;
  const avatarURL = user.avatarURL;
  const questions = user.questions.length;
  const answers = Object.keys(user.answers).length;
  const total = questions + answers;
  return {
    name,
    avatarURL,
    questions,
    answers,
    total,
  };
}
export default connect(mapStateToProps)(Users);
