import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addAnswerToQuestion } from "../Actions/questions";
import { addAnswerToUser } from "../Actions/users";
import { isAnswered } from "../Actions/polls";
import { Link } from "react-router-dom";
class UnansweredPoll extends React.Component {
  state = {
    selectedOption: "optionOne",
  };
  render() {
    const {
      author,
      optionOne,
      optionTwo,
      avatarURL,
      dispatch,
      questionId,
      authedUser,
    } = this.props;
    const handleChange = (e) => {
      this.setState({ selectedOption: e.target.value });
    };

    console.log("Votted Answer: ", this.state.selectedOption);
    const handleSelectedOption = (e) => {
      e.preventDefault();
      const qid = questionId;
      const Answer = this.state.selectedOption;
      dispatch(addAnswerToQuestion(authedUser, qid, Answer));
      dispatch(addAnswerToUser(authedUser, qid, Answer));
      dispatch(isAnswered("true"));
    };
    return (
      <Fragment>
        <div className="card-header">
          <p className="askBy">{author} asks:</p>
          <Link
            type="button"
            to="/"
            className="btn btn-outline-dark back-button"
          >
            Back
          </Link>
        </div>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={avatarURL}
              className="card-img pollquestions"
              alt={author}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="question-text">Would you rather</p>
              <form className="unanswered-poll">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="optionOne"
                    name="poll"
                    id="optionOne"
                    onChange={handleChange}
                    checked={this.state.selectedOption === "optionOne"}
                  />
                  <label className="form-check-label" htmlFor="optionOne">
                    {optionOne}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="optionTwo"
                    name="poll"
                    id="optionTwo"
                    onChange={handleChange}
                    checked={this.state.selectedOption === "optionTwo"}
                  />
                  <label className="form-check-label" htmlFor="optionTwo">
                    {optionTwo}
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark mt-3"
                  onClick={handleSelectedOption}
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
function mapStateToProps({ users, questions, authedUser, dispatch }, { id }) {
  const questionId = id;
  const question = questions[questionId];
  const user = users[question.author];
  const author = user.name;
  const avatarURL = user.avatarURL;
  const optionOne = question.optionOne.text;
  const optionTwo = question.optionTwo.text;
  return {
    questionId,
    author,
    avatarURL,
    optionOne,
    optionTwo,
    dispatch,
    authedUser,
  };
}
export default connect(mapStateToProps)(UnansweredPoll);
