import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

const pages = ["Home", "About", "Properties", "Contacts"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#333" }}>
      <Container maxWidth="lg">
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={1}
          paddingY={2}
        >
          <MenuItem>
            <Link
              component={RouterLink}
              to="/"
              underline="none"
              color={"#fff"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              ESLavsita
            </Link>
          </MenuItem>
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            alignItems={"center"}
          >
            {pages.map((title, index) => (
              <MenuItem key={index}>
                <Link
                  underline="none"
                  component={RouterLink}
                  to={`/${title.toLocaleLowerCase()}`}
                  color={"#fff"}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {title}
                </Link>
              </MenuItem>
            ))}
          </Box>
          <Box
            sx={{ display: { xs: "block", md: "none" } }}
            alignItems={"center"}
          >
            <Button
              // onClick={() => onSidebarOpen()}
              aria-label="Menu"
              variant={"outlined"}
              sx={{
                borderRadius: 2,
                minWidth: "auto",
                padding: 1,
                // borderColor: alpha(theme.palette.divider, 0.2),
              }}
            >
              <MenuIcon />
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
export default Navbar;
