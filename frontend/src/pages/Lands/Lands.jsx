import React from "react";
import Listings from "./components/Listings";
import Container from "components/Container";
import Main from "layout/Main";

const Lands = () => {
  return (
    <Main>
      <Container>
        <Listings />
      </Container>
    </Main>
  );
};

export default Lands;
