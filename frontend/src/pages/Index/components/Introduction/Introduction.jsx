import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Introduction = () => {
  return (
    <Box>
      <Grid container spacing={0}>
        <Grid
          p={6}
          item
          xs={12}
          sm={6}
          container
          direction="row"
          alignItems="center"
        >
          <Typography variant="h3">Who We Are</Typography>
          <Typography color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus ad voluptates eius! Veritatis minima nam quisquam,
            tempore architecto molestiae iusto? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolore dicta consequuntur aliquid
            ullam ex quasi enim aliquam, fugiat nostrum non?
          </Typography>
          <Typography color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus ad voluptates eius! Veritatis minima nam quisquam,
            tempore architecto molestiae iusto? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolore dicta consequuntur aliquid
            ullam ex quasi enim aliquam, fugiat nostrum non?
          </Typography>

          <Button
            size="small"
            sx={{
              bgcolor: "#333",
              color: "#fff",
              padding: "8px 20px",
              "&:hover": {
                bgcolor: "#333",
                color: "#fff",
              },
            }}
          >
            Learn More
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            src={
              "https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/large_jpg/AM1506.jpg?1583892706"
            }
            component="img"
            sx={{
              height: "100%",
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Introduction;
