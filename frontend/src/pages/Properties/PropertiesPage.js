import React from "react";
import Listings from "./components/Listings";
import Container from "components/Container";
import Main from "components/Main";

const PropertiesPage = () => {
  return (
    <Main>
      <Container>
        <Listings />
      </Container>
    </Main>
  );
};

export default PropertiesPage;
