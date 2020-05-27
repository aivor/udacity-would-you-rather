import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import LeaderBoard from "./Components/LeaderBoard";
import NewQuestion from "./Components/NewQuestion";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import PollDetails from "./Components/PollDetails";
import PageNotFound from "./Components/PageNotFound";
import Login from "./Components/Login";
import handleInitialData from "./Actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <div className="App">
          {!this.props.loggedIn ? (
            <Route render={() => <Login />} />
          ) : (
            <Fragment>
              <Nav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/questions/bad_id" component={PageNotFound} />
                <Route path="/questions/:id" component={PollDetails} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/add" component={NewQuestion} />
                <Route component={PageNotFound} />
              </Switch>
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ loggedIn, authedUser, dispatch }) {
  return {
    authedUser,
    loggedIn,
    dispatch,
  };
}
export default connect(mapStateToProps)(App);
