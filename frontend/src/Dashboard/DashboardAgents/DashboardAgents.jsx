import { Typography } from "@mui/material";
import Container from "components/Container";
import Listings from "./components/Listings";

const DashboardAgents = () => {
  return (
    <Container paddingX={"0 !important"} paddingY={"0 !important"}>
      <Typography variant="h4">Agents</Typography>
      <Listings />
    </Container>
  );
};

export default DashboardAgents;
