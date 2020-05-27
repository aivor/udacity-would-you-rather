import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const LoginRequiredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);
export default connect((state) => ({
  loggedIn: state.loggedIn,
}))(LoginRequiredRoute);
