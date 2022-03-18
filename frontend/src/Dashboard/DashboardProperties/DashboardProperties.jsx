import { Typography } from "@mui/material";
import Container from "components/Container";
import React from "react";
import Listings from "./components/Listings";

const DashboardProperties = () => {
  return (
    <Container paddingX={"0 !important"} paddingY={"0 !important"}>
      <Typography variant="h4">Properties</Typography>
      <Listings />
    </Container>
  );
};

export default DashboardProperties;
