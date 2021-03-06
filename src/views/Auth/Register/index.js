import React, { useState } from "react";

import { Wrapper, Form, Input, Button, Card, Box } from "bushido-strap";

import { useDispatch, connect } from "react-redux";
import { useHistory } from "react-router";

import { registerUser } from "../../../store/actions/registerUser";

import CheckBox from "./components/CheckBox";

function Register(props) {
  const [newAccount, setNewAccount] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    location: "",
    is_stylist: null
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = e => {
    e.preventDefault();
    setNewAccount({...newAccount, [e.target.name] : e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(newAccount));
    history.push("/");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Card p="4rem">
          <h2>Register here!</h2>
          <Box h="2rem" />
          <Input type="text" 
          placeholder="Name"
          name="name"
          value={newAccount.name}
          onChange={handleChange} />
          <Box h="2rem" />
          <Input type="text" 
          placeholder="email"
          name="email"
          value={newAccount.email}
          onChange={handleChange} />
          <Box h="2rem" />
          <Input type="text" 
          placeholder="location"
          name="location"
          value={newAccount.location}
          onChange={handleChange} />
          <Box h="2rem" />
          <Input type="text" 
          placeholder="username"
          name="username"
          value={newAccount.username}
          onChange={handleChange} />
          <Box h="2rem" />
          <Input type="password" 
          placeholder="Password"
          name="password" 
          value={newAccount.password}
          onChange={handleChange} />
          <Box h="2rem" />
          <CheckBox />
          {/* <Button green type="submit" stretch> */}
          <Button green type="submit" stretch onClick={() => registerUser.is_stylist ? props.history.push("/profile", registerUser) : props.history.push("/stylists-profile", registerUser)}>
            Register
          </Button>
        </Card>
      </Form>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  console.log(state.registerUser);
  return ({
    error: state.registerUser.error,
    loggingIn: state.registerUser.loggingIn,
    registerUser: state.registerUser
  })
};

export default connect(mapStateToProps, { registerUser })(Register)
