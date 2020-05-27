import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AnsweredPollOption from "./AnsweredPollOption";
const Uservotelabel = () => (
  <div className="userVote bd-success">
    <span>
      your <br /> vote
    </span>
  </div>
);

class AnsweredPoll extends React.Component {
  render() {
    const {
      avatarURL,
      author,
      optionOne,
      optionTwo,
      optionOneVotes,
      optionTwoVotes,
      totalVotes,
      per_optionOne,
      per_optionTwo,
      userVote,
    } = this.props;

    const defaultBg = "progress-bar bg-dark";
    const secondaryBg = "progress-bar bg-success";
    let option1 = defaultBg,
      option2 = defaultBg;

    if (optionOneVotes > optionTwoVotes) {
      option1 = secondaryBg;
    } else if (optionTwoVotes > optionOneVotes) {
      option2 = secondaryBg;
    }

    return (
      <Fragment>
        <div className="card-header">
          <p className="askBy"> Asked by {author} :</p>
          <Link
            to="/"
            type="button"
            className="btn btn-outline-dark"
            style={{ float: "right", marginTop: "-30px" }}
          >
            Back
          </Link>
        </div>
        <div className="row no-gutters">
          <div className="col-md-5">
            <div className="card-img-container">
              <img src={avatarURL} className="card-img" alt={author} />
            </div>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <p className="question-text"> Results: </p>
              <div className="card mb-2 border-dark">
                <div className="card-body">
                  {userVote === "optionOne" && <Uservotelabel />}
                  <AnsweredPollOption
                    optionstyle={option1}
                    optiontext={optionOne}
                    optionVotes={optionOneVotes}
                    option_perc={per_optionOne}
                    totalVotes={totalVotes}
                  />
                </div>
              </div>
              <div className="card border-dark">
                <div className="card-body">
                  {userVote === "optionTwo" && <Uservotelabel />}
                  <AnsweredPollOption
                    optionstyle={option2}
                    optiontext={optionTwo}
                    optionVotes={optionTwoVotes}
                    option_perc={per_optionTwo}
                    totalVotes={totalVotes}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
function mapStateToProps({ users, questions, authedUser }, { id }) {
  const questionId = id;
  const question = questions[questionId];
  const user = users[question.author];
  const author = user.name;
  const avatarURL = user.avatarURL;
  const optionOne = question.optionOne.text;
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwo = question.optionTwo.text;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const per_optionOne = Math.round((optionOneVotes / totalVotes) * 100);
  const per_optionTwo = Math.round((optionTwoVotes / totalVotes) * 100);
  const userVote = user.answers[questionId];

  return {
    author,
    avatarURL,
    optionOne,
    optionTwo,
    question,
    per_optionTwo,
    optionOneVotes,
    optionTwoVotes,
    userVote,
    per_optionOne,
    totalVotes,
  };
}
export default connect(mapStateToProps)(AnsweredPoll);
