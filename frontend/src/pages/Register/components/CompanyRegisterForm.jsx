import { Box, Button, Divider, TextField } from "@mui/material";
import React from "react";

const CompanyRegisterForm = () => {
  return (
    <Box>
      <form className="mui-form">
        <Box mb={2}>
          <label>Name</label>
          <TextField padding={4} fullWidth placeholder="name" />
        </Box>
        <Box mb={2}>
          <label>Email</label>
          <TextField padding={4} fullWidth placeholder="email" />
        </Box>
        <Box mb={2}>
          <label>Company info</label>
          <br />
          <TextField multiline rows={4} fullWidth placeholder="Company info" />
        </Box>
        <Box mb={2}>
          <label>Password</label>
          <TextField padding={4} fullWidth placeholder="password" />
        </Box>
        <Box mb={2}>
          <label>Confirm Password</label>
          <TextField padding={4} fullWidth placeholder="confirm password" />
        </Box>

        <Button
          fullWidth
          size="small"
          sx={{
            bgcolor: "#333",
            color: "#fff",
            padding: "8px 20px",
            marginRight: "10px",
            "&:hover": {
              bgcolor: "#333",
              color: "#fff",
            },
          }}
        >
          Register
        </Button>
      </form>

      <Box py={2}>
        <Button
          fullWidth
          size="small"
          sx={{
            bgcolor: "#f1f1f1",
            color: "#333",
            padding: "8px 20px",
            marginRight: "10px",
            "&:hover": {
              bgcolor: "#ccc",
              color: "#333",
            },
          }}
        >
          Google
        </Button>
      </Box>
    </Box>
  );
};

export default CompanyRegisterForm;
