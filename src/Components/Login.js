import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../Actions/authenticatedUser";
import { changeLoggedIn } from "../Actions/loggedIn";

class Login extends Component {
  state = {
    userId: "",
  };

  handleChange = (e) => {
    const userId = e.target.value;
    this.setState({ userId });
  };
  handleLogin = (e) => {
    e.preventDefault();
    if (this.state.userId === "selectUser") {
      alert("please select user to login.");
      this.setState({ userId: "" });
    } else {
      this.props.dispatch(setAuthedUser(this.state.userId));
      this.props.dispatch(changeLoggedIn(true));
    }
  };
  render() {
    const { user, users } = this.props;
    return (
      <div className="login">
        <div className="card login-card">
          <LoginHeader />
          <LoginBrand />
          <div className="card-body">
            <LoginText />
            <form className="login">
              <div className="form-group">
                <label htmlFor="selectUser">
                  <select
                    id="selectUser"
                    className="form-control"
                    onChange={this.handleChange}
                  >
                    <option value="selectUser">select user</option>
                    {user &&
                      user.map((user) => (
                        <option key={users[user].id} value={users[user].id}>
                          {users[user].name}
                        </option>
                      ))}
                  </select>
                </label>
              </div>
              <button
                type="submit"
                className="btn bg-primary login-btn"
                onClick={this.handleLogin}
                disabled={
                  this.state.userId === "" || this.stateId === "selectUser"
                }
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const LoginHeader = () => (
  <div className="card-header">
    <h4 className="card-title app-title">
      Welcome to the Would You Rather App!
    </h4>
    <h6
      className="card-subtitle mb-2 text-muted "
      style={{ textAlign: "center" }}
    >
      Please sign in to continue
    </h6>
  </div>
);
const LoginBrand = () => (
  <div id="card-img-container">
    <img
      className="card-image"
      alt="would you rather"
      src="/image.jpg"
      width="250px"
      height="150px"
    />
  </div>
);
const LoginText = () => (
  <p className="formText" style={{ textAlign: "center" }}>
    Sign In
  </p>
);
function mapStateToProps({ users, loggedIn, dispatch }) {
  return {
    user: Object.keys(users),
    users,
    loggedIn,
    dispatch,
  };
}
export default connect(mapStateToProps)(Login);
