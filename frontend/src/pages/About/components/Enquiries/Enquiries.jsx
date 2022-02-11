import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Enquiries = () => {
  return (
    <Box py={6} sx={{ bgcolor: "#f1f1f1" }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="h3">Vacancies</Typography>
        <Typography
          color="text.secondary"
          sx={{ maxWidth: "50%" }}
          mb={2}
          mx={"auto"}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ut
          aliquid expedita officiis dolor. Magni corporis voluptates fuga
          temporibus voluptatum magnam maxime quasi, eum repudiandae impedit
          quas commodi consectetur necessitatibus, reiciendis blanditiis enim
          ullam, quaerat eius possimus placeat. Rerum, temporibus.
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
          ENQUIRIES
        </Button>
      </Container>
    </Box>
  );
};

export default Enquiries;
