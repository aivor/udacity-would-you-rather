import React, { Component } from "react";
import { connect } from "react-redux";
import UnAnsweredPoll from "./UnAnsweredPoll";
import AnsweredPoll from "./AnsweredPoll";
import { Redirect } from "react-router-dom";
class Poll extends Component {
  render() {
    const { poll, id, questions } = this.props;
    const bad_id = !Object.keys(questions).includes(id);
    if (bad_id) {
      return <Redirect to="/questions/bad_id" />;
    }
    return (
      <div className="card home-card mb-3">
        {poll === false ? <UnAnsweredPoll id={id} /> : <AnsweredPoll id={id} />}
      </div>
    );
  }
}
function mapStateToProps({ users, questions, authedUser, poll }, props) {
  let { id } = props.match.params;
  id = id.substr(1);

  return {
    poll,
    id,
    questions,
  };
}
export default connect(mapStateToProps)(Poll);
