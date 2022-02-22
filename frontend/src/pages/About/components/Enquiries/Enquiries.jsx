import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Enquiries = () => {
  return (
    <Box maxWidth={{ xs: 1, md: 0.8 }} paddingX={{ xs: 4, md: 9 }}>
      <Typography variant="h4">Vacancies</Typography>
      <Typography color="text.secondary" mb={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ut
        aliquid expedita officiis dolor. Magni corporis voluptates fuga
        temporibus voluptatum magnam maxime quasi, eum repudiandae impedit quas
        commodi consectetur necessitatibus, reiciendis blanditiis enim ullam,
        quaerat eius possimus placeat. Rerum, temporibus.
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
    </Box>
  );
};

export default Enquiries;
