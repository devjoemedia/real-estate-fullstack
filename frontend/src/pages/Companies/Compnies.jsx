import React from "react";
import Main from "layout/Main";
import Container from "components/Container";
import Listings from "./components/Listings";

const Compnies = () => {
  return (
    <Main>
      <Container>
        <Listings />
      </Container>
    </Main>
  );
};

export default Compnies;
