import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Review from "components/Review";

const Testimonials = () => {
  return (
    <Box maxWidth={"lg"} margin={"auto"}>
      <Typography variant="h4" sx={{ textAlign: "left", marginBottom: "20px" }}>
        Success Story
      </Typography>
      <Box>
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
      </Box>
    </Box>
  );
};

export default Testimonials;
