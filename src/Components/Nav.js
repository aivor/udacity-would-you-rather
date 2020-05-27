import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { clearAuthedUser } from "../Actions/authenticatedUser";
import { changeLoggedIn } from "../Actions/loggedIn";

class Nav extends Component {
  render() {
    const logout = () => {
      const { dispatch, authedUser } = this.props;
      dispatch(changeLoggedIn(false));
      dispatch(clearAuthedUser(authedUser));
    };

    const { user } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add">
                New Question
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/leaderboard">
                Leader Board
              </NavLink>
            </li>
            <li className="nav-item pl-4">
              <span className="text-primary"> hello, {user.name}</span>
              <img
                src={user.avatarURL}
                className="rounded-circle p-2"
                alt={user.avatarURL}
                style={{ width: "45px", height: "45px" }}
              />
            </li>
            <li>
              <button className="btn btn-outline-primary mt-1" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users, dispatch }) {
  return {
    authedUser,
    user: users[authedUser],
    dispatch,
  };
}
export default connect(mapStateToProps)(Nav);
