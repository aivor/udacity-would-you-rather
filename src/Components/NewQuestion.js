import React, { Component } from "react";
import { handleAddQuestion } from "../Actions/questions";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };
  render() {
    const handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    const addQuestion = (e) => {
      e.preventDefault();
      const optionOneText = this.state.optionOne;
      const optionTwoText = this.state.optionTwo;
      if (optionOneText !== "" && optionTwoText !== "") {
        this.props.dispatch(handleAddQuestion(optionOneText, optionTwoText));
        this.props.history.push("/");
      } else {
        alert("Please enter both options ");
      }
    };
    return (
      <div className="newQuestion">
        <div className="card newQuestion-card ">
          <div className="card-header">
            <h2 className="card-title">Create New Question</h2>
          </div>
          <div className="card-body">
            <p className="questionText">Complete the question:</p>
            <p className="would-you-rather"> Would you rather...</p>
            <form className="new-question">
              <div className="form-group">
                <label>
                  <input
                    onChange={handleChange}
                    name="optionOne"
                    type="text"
                    className="form-control"
                    placeholder="Enter Option One Text Here"
                  />
                </label>
              </div>
              <span style={{ marginBottom: "10px" }}>OR</span>
              <div className="form-group">
                <label>
                  <input
                    onChange={handleChange}
                    name="optionTwo"
                    type="text"
                    className="form-control"
                    placeholder="Enter Option Two Text Here"
                  />
                </label>
              </div>
              <button
                onClick={addQuestion}
                type="submit"
                className="btn btn-dark"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
