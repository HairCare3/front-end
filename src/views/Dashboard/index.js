import React from "react";

import { Wrapper, Linkton, Button, Row, Box } from "bushido-strap";

import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../../store/actions/auth";

import StylistProfile from "./components/StylistsProfile"
import CustomerProfile from "./components/CustomerProfile";

export default function Dashboard() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Wrapper>
    {auth.is_stylist ? <StylistProfile /> : <CustomerProfile />}
    </Wrapper>
  );
}
