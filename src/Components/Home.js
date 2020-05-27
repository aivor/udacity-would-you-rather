import React, { Component } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";
import { isAnswered } from "../Actions/polls";

class Questions extends Component {
  render() {
    const { AnsweredQuestionsId, UnansweredQuestionsId, dispatch } = this.props;
    const handleAnsweredQuestionPoll = () => {
      dispatch(isAnswered(true));
    };
    const handleUnAnsweredQuestionPoll = () => {
      dispatch(isAnswered(false));
    };
    return (
      <div className="card home-card mb-3" id="home">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              onClick={handleUnAnsweredQuestionPoll}
              className="nav-item nav-link active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Unanswered Questions
            </a>
            <a
              onClick={handleAnsweredQuestionPoll}
              className="nav-item nav-link"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Answered Questions
            </a>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            {UnansweredQuestionsId.map((id) => (
              <div className="card questions-card" key={id}>
                <UserCard id={id} />
              </div>
            ))}
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            {AnsweredQuestionsId.map((id) => (
              <div className="card questions-card" key={id}>
                <UserCard id={id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ questions, authedUser, users, dispatch }) {
  const questionId = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const user = users[authedUser];
  const AnsweredQuestionsId = Object.keys(user.answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const UnansweredQuestionsId = questionId
    .filter((id) => !AnsweredQuestionsId.includes(id))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    AnsweredQuestionsId,
    UnansweredQuestionsId,
    dispatch,
  };
}
export default connect(mapStateToProps)(Questions);
