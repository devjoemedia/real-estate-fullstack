import React from "react";
import Main from "layout/Main";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";

const Login = () => {
  return (
    <Main bgcolor="#f1f1f1">
      <Box
        sx={{
          width: "100%",
          minHeight: "60vh",
          padding: "20px",
          display: "grid",
          placeItems: "center",
        }}
        py={4}
      >
        <Box
          sx={{
            width: "450px",
            padding: "20px",
          }}
        >
          <Box p={3} mt={2} bgcolor="#fff">
            <Typography variant="h5" mb={2}>
              Login
            </Typography>
            <form className="mui-form">
              <Box mb={2}>
                <label>Email</label>
                <TextField padding={4} fullWidth placeholder="email" />
              </Box>
              <Box mb={2}>
                <label>Password</label>
                <TextField padding={4} fullWidth placeholder="password" />
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
                Login
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
                continue with Google
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Main>
  );
};

export default Login;
