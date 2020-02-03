import React from "react";

import { Route } from "react-router-dom";

import { useSelector } from "react-redux";

import LandingPage from "../LandingPage";

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { token } = useSelector(state => state.auth);

  return (
    <Route
      {...rest}
      render={routeProps => {
        return token ? <RouteComponent {...routeProps} /> : <LandingPage />;
      }}
    />
  );
}
