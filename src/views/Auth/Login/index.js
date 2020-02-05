import React from "react";

import {
  Wrapper,
  Form,
  Input,
  Button,
  Card,
  Box,
  theme,
  Row,
  Col
} from "bushido-strap";

import { useDispatch, connect } from "react-redux";
import { useHistory } from "react-router";

import { authenticate } from "../../../store/actions/auth";

function Login(props) {
  console.log(props)
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch(authenticate());
    history.push("/profile");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Card p="4rem">
          <Row stretch jc_evenly>
            <Box sqr="5rem" star bg={theme.red5} />
            <Box sqr="5rem" message bg={theme.blue5} />
          </Row>
          <h2>Login here!</h2>
          <Box h="2rem" />
          <Input type="text" placeholder="Email" />
          <Box h="2rem" />
          <Input type="password" placeholder="Password" />
          <Box h="2rem" />
          <Button green type="submit" stretch>
            Login
          </Button>
        </Card>
      </Form>
    </Wrapper>
  );
}
const mapStateToProps = state => {
  console.log(state.auth);
  return ({
    error: state.auth.error,
    loggingIn: state.auth.loggingIn
  })
}
export default connect(mapStateToProps, { authenticate })(Login)
