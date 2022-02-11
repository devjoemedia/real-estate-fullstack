import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Review from "../../../../components/Review";

const Testimonials = () => {
  return (
    <Box py={5} bgcolor={"#f1f1f1"}>
      <Container maxWidth={"lg"}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "20px" }}
        >
          What Our Client Say!
        </Typography>
        <Container maxWidth={"lg"}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Review />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Review />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Review />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};

export default Testimonials;
