import React from "react";

import { Wrapper, Linkton, Button, Row, Box } from "bushido-strap";

import { useDispatch } from "react-redux";

import { signOut } from "../../store/actions/auth";

// import StylistProfile from "./components/StylistsProfile"
// import CustomerProfile from "./components/CustomerProfile";

export default function Dashboard() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Wrapper>
      {/* if user.isStylist === true return StylistProfile */}
      {/* else return CustomerProfile */}
      <Row jc_between stretch ai_center>
        <Box w="112.84px" />
        <h1>Hello, world!</h1>
        <Button h="100%" onClick={handleSignOut}>
          Sign Out
        </Button>
      </Row>
      <Row>
        <Linkton to="/counter">Redux Counter</Linkton>
      </Row>
    </Wrapper>
  );
}
