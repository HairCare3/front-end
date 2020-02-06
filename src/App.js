import React from "react";

// Set up all routes in App
import { Route } from "react-router-dom";

// Using AppWrapper to set font and background for the app
import { AppWrapper, theme } from "bushido-strap";

// Importing all routes
import PrivateRoute from "./views/PrivateRoute";
import Register from "./views/Auth/Register";
import Login from "./views/Auth/Login";
import Dashboard from "./views/Dashboard";
import ReduxCounter from "./views/ReduxCounter";
import StylistsProfile from "./views/Dashboard/components/StylistsProfile";
import CustomerProfile from "./views/Dashboard/components/CustomerProfile";
import StylistsList from "./views/Dashboard/components/StylistsList";
import UsersList from "./views/Dashboard/components/UsersList";

// Using Web Font Loader for google fonts
import WebFont from "webfontloader";


// setting our font variables
const h_font = "Comfortaa";
const r_font = "Montserrat";

// using WebFont to easily access Google fonts
WebFont.load({
  google: {
    families: [h_font, r_font]
  }
});

const App = () => {
  return (
    <AppWrapper head_font={h_font} font={r_font}>
      <PrivateRoute path="/" exact component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/counter" component={ReduxCounter} />
      <PrivateRoute path="/stylists-profile" component={StylistsProfile} />
      <PrivateRoute path="/profile" component={CustomerProfile} />
      <PrivateRoute path="/stylists" component={StylistsList} />
      <PrivateRoute path="/users" component={UsersList} />
    </AppWrapper>
  );
};

export default App;
