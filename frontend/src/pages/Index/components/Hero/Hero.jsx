import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import barnerImage from "images/barnner.jpg";
import LazyImage from "components/LazyImage";

const Hero = () => {
  return (
    <Box sx={{ bgcolor: "#f2f2f2" }}>
      {/* <Container> */}
      <Grid container sx={{ minHeight: "600px" }}>
        <Grid item xs={12} sm={6}>
          <LazyImage
            image={{ height: "100%", width: "100%", src: barnerImage }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          sx={{ bgcolor: "#f1f1f1", color: "#000000" }}
          container
          direction="row"
          justifyContent="space-between"
        >
          <Grid item xs={12} p={5}>
            <Typography variant="h3" mb={2.5}>
              Making Your Comfort Is Our Happiness{" "}
            </Typography>
            <Typography mb={3} color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              corporis impedit harum veritatis magnam sit! Fugit atque earum
              quos non
            </Typography>
            <Button
              variant="contained"
              size="medium"
              sx={{
                bgcolor: "#333",
                color: "#fff",
                "&:hover": { bgcolor: "#333", color: "#fff" },
              }}
            >
              <Link
                component={RouterLink}
                to="/properties"
                underline="none"
                color={"#fff"}
              >
                Find a Property
              </Link>
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            p={5}
            sx={{
              bgcolor: "#333",
              color: "#fff",
              minHeight: "200px",
              marginTop: "auto",
            }}
          >
            <Typography variant="h4" mb={2.5}>
              Your comfort is our priority
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              sint cumque nemo recusandae quidem in!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* </Container> */}
    </Box>
  );
};

export default Hero;
