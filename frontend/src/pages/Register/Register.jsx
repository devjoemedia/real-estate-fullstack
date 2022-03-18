import { Box, Divider, Typography } from "@mui/material";
import Main from "layout/Main";
import React, { useState } from "react";
import CompanyRegisterForm from "./components/CompanyRegisterForm";
import UserRegisterForm from "./components/UserRegisterForm";

const Register = () => {
  const [asCompany, setAsCompany] = useState(false);

  return (
    <Main bgcolor="#f5f5f5">
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h5"
                mb={2}
                mr={1}
                sx={{ cursor: "pointer", color: asCompany ? "#777" : "#000" }}
                onClick={() => setAsCompany(false)}
              >
                User |
              </Typography>
              <Typography
                variant="h5"
                mb={2}
                sx={{ cursor: "pointer", color: asCompany ? "#000" : "#777" }}
                onClick={() => setAsCompany(true)}
              >
                Company
              </Typography>
            </Box>
            <Divider />

            <Typography variant="h5" mb={2} mt={2}>
              Register
            </Typography>
            {asCompany ? <CompanyRegisterForm /> : <UserRegisterForm />}
          </Box>
        </Box>
      </Box>
    </Main>
  );
};

export default Register;
