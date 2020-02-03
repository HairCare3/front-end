import React from "react";

import { Wrapper, Form, Input, Button, Card, Box } from "bushido-strap";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { authenticate } from "../../../store/actions/auth";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch(authenticate());
    history.push("/");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Card p="4rem">
          <h2>Register here!</h2>
          <Box h="2rem" />
          <Input type="text" placeholder="Email" />
          <Box h="2rem" />
          <Input type="password" placeholder="Password" />
          <Box h="2rem" />
          <Button green type="submit" stretch>
            Register
          </Button>
        </Card>
      </Form>
    </Wrapper>
  );
}
