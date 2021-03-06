import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Workout from "./components/Workout";
import Header from "./components/Header";

// connect() links up the component to the redux store to (be able) to pull out the data needed.

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path="/workout"
        component={Workout}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />

      <Route path="/login" component={Login} />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}
//connect() links up our component to the redux store to enable to fetch the data we need to be pulled out.
//To do this to define a mapStateToProps function at the bottom of our component and pass it to connect.
export default connect(mapStateToProps)(App);
