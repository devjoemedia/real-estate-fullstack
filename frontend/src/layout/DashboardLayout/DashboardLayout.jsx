import {
  AppBar,
  Avatar,
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import DashboardNav from "./components/DashboardNav";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardMenu from "./components/DashboardMenu";

const DashboardLayout = () => {
  const [isLogedIn, setIsLoggedIn] = useState(true);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <Box overflowX="hidden">
      <Box
        position={"fixed"}
        width={"230px"}
        display={{ xs: "none", md: "block", bgcolor: "#333" }}
      >
        <DashboardNav />
      </Box>
      {/* xs={12} sm={10} */}
      <Box paddingLeft={{ xs: "0px", md: "230px" }} width={1}>
        <Box
          sx={{ bgcolor: "#333" }}
          position={"sticky"}
          boxShadow={"none !important"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={1}
            paddingY={2}
            paddingX={3}
          >
            <Box>
              <Box
                sx={{ width: "350px", border: "none", outline: "none" }}
                bgcolor="#fff"
              >
                <TextField
                  fullWidth
                  sx={{
                    border: "none !important",
                    outline: "none !important",
                    bgcolor: "#fff !important",
                  }}
                  placeholder="Search properties"
                  size="medium"
                />
              </Box>
            </Box>

            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              alignItems={"center"}
            >
              {!isLogedIn ? (
                <>
                  <Box marginLeft={4}>
                    <Link component={RouterLink} to="/login" underline="none">
                      <Button variant="contained" color="primary" size="medium">
                        Login
                      </Button>
                    </Link>
                  </Box>
                  <Box marginLeft={4}>
                    <Link
                      component={RouterLink}
                      to="/register"
                      underline="none"
                    >
                      <Button variant="contained" color="primary" size="medium">
                        Register
                      </Button>
                    </Link>
                  </Box>
                </>
              ) : (
                <>
                  <Box marginLeft={4}>
                    <MenuItem color="#888">
                      <Link
                        underline="none"
                        component={RouterLink}
                        to="/dashboard"
                        color="inherit"
                      >
                        <Button variant="contained" size="medium">
                          Logout
                        </Button>
                      </Link>
                    </MenuItem>
                  </Box>
                  <Box marginLeft={1}>
                    <Link component={RouterLink} to="register" underline="none">
                      <Avatar sx={{ width: "40px", height: "40px" }} />
                    </Link>
                  </Box>
                </>
              )}
            </Box>

            <Box
              sx={{ display: { xs: "block", md: "none" } }}
              alignItems={"center"}
            >
              <Button
                onClick={() => handleSidebarOpen()}
                aria-label="Menu"
                variant={"outlined"}
                sx={{
                  borderRadius: 2,
                  minWidth: "auto",
                  padding: 1,
                }}
              >
                <MenuIcon />
              </Button>
            </Box>
          </Box>
        </Box>

        <DashboardMenu
          onClose={handleSidebarClose}
          open={open}
          variant="temporary"
          // pages={navigations}
        />

        <Box padding={4} height="700px">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
