import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import NavItem from "./components/NavItem";
import { Typography } from "@mui/material";

const SidebarNav = ({ pages }) => {
  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={"flex"}
          component="div"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Typography variant="h5" component="p">
            ESLavsita
          </Typography>
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        {pages.map((page, index) => (
          <Box key={index}>
            <NavItem title={page.groupTitle} items={page.pages} />
          </Box>
        ))}

        <Box marginTop={2}>
          <Button
            size={"large"}
            variant="outlined"
            fullWidth
            component="a"
            href="/login"
          >
            Login
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            size={"large"}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="/register"
          >
            Register now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;
