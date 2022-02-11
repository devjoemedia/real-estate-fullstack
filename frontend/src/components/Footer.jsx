import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#333", paddingY: "20px" }}>
      <Container maxWidth="lg">
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          EstateLavista ©2020
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;
