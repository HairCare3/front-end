import React from "react";

// Set up all routes in App
import { Route, Link } from "react-router-dom";

// Using AppWrapper to set font and background for the app
import { AppWrapper, Row, Linkton, Button } from "bushido-strap";

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
import AddStylistReviews from "./views/Dashboard/components/AddStylistReviews";
import Stylist from "./views/Dashboard/components/SingleStylist";
import User from "./views/Dashboard/components/SingleUser";
import ReviewsList from "./views/Dashboard/components/ReviewsLists";
import Review from "./views/Dashboard/components/SingleReview";
import UpdateReviewForm from "./views/Dashboard/components/UpdateReviewForm";
import SearchForm from "./views/Dashboard/components/SearchForm";

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
  const logout = () => {
    localStorage.removeItem("token")
};
  
  return (
    <AppWrapper head_font={h_font} font={r_font} m="0 auto">
      <Row justify="flex-end" bg="black" p="2rem">
        <Linkton to="/">Home</Linkton>
        <Linkton to="/stylists">Stylists</Linkton>
        <Linkton to="/users">Users</Linkton>
        <Linkton to="/reviews">Reviews</Linkton>
        <Button onClick={logout}>Logout</Button>
      </Row>
      <PrivateRoute path="/" exact component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/counter" component={ReduxCounter} />
      <PrivateRoute path="/stylists-profile" component={StylistsProfile} />
      <PrivateRoute path="/profile" component={CustomerProfile} />
      <PrivateRoute exact path="/stylists" component={StylistsList} />
      <PrivateRoute exact path="/stylists/:id" component={Stylist} />
      <PrivateRoute exact path="/stylists/:id/reviews" component={AddStylistReviews} />
      <PrivateRoute exact path="/users" component={UsersList} />
      <PrivateRoute exact path="/users/:id" component={User} />
      <PrivateRoute exact path="/reviews" component={ReviewsList} />
      <PrivateRoute path="/reviews/:id" component={Review} />
      <PrivateRoute path="/reviews/:id/update" component={UpdateReviewForm} />
      <PrivateRoute path="/search" component={SearchForm} />
    </AppWrapper>
  );
};

export default App;
