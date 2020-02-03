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

const picture =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themefoxx.com%2Fwp-content%2Fuploads%2F2017%2F04%2F4k-3840-x-2160-wallpapers-themefoxx-639.jpg&f=1&nofb=1";

const App = () => {
  return (
    <AppWrapper bg_src={picture} head_font={h_font} font={r_font}>
      <PrivateRoute path="/" exact component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/counter" component={ReduxCounter} />
    </AppWrapper>
  );
};

export default App;
