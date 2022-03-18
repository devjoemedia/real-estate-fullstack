import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ContactAgentForm = () => {
  return (
    <Box px={{ xs: 1, sm: 0, md: 3 }}>
      <Typography variant="h5" mb={2}>
        Contact Agent
      </Typography>
      <form className="mui-form">
        <Box mb={2}>
          <label>Name</label>
          <TextField padding={4} fullWidth placeholder="name" />
        </Box>
        <Box mb={2}>
          <label>Phone</label>
          <TextField padding={4} fullWidth placeholder="phone" />
        </Box>
        <Box mb={2}>
          <label>Email</label>
          <TextField padding={4} fullWidth placeholder="email" />
        </Box>
        <Box mb={2}>
          <label>message</label>
          <br />
          <TextField
            multiline
            rows={4}
            fullWidth
            defaultValue="Default Value"
          />
        </Box>

        <Button
          size="small"
          fullWidth
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
          Send message
        </Button>
      </form>
    </Box>
  );
};

export default ContactAgentForm;
